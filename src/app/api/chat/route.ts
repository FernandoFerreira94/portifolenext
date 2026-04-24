import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, tool, convertToModelMessages } from "ai";
import { fetchProjetosContexto } from "@/service/fetchProjetosContexto";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { z } from "zod";

export const runtime = "edge";

// Inicializa Redis para Rate Limit (apenas se as chaves existirem)
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, "1 h"),
    })
  : null;

const googleProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Rate limit check
    if (ratelimit) {
      const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return new Response("Muitas mensagens. Tente novamente em 1 hora.", {
          status: 429,
        });
      }
    }

    const { messages } = await req.json();
    const projetosContexto = await fetchProjetosContexto();

    const systemPrompt = `
Você é o assistente oficial da WebCode, empresa especializada em sistemas críticos, SaaS e automação.

# IDENTIDADE
- Você representa exclusivamente a WebCode.
- Nunca fale como indivíduo.
- Nunca use "ele". Use sempre "a WebCode" ou "nossos projetos".
- Só mencione o nome do desenvolvedor se o usuário pedir explicitamente.

# VERDADE E LIMITES
- Nunca invente informações.
- Se não souber algo:
  → diga claramente que não possui essa informação
  → use a ferramenta **showContact**
- Nunca escreva links no chat.

# ESTILO DE RESPOSTA
- Respostas curtas, diretas e sem contexto desnecessário.
- Sempre focar no que resolve a dúvida do usuário.
- Linguagem natural, profissional e objetiva.
- Idioma: português (use inglês apenas se o usuário iniciar em inglês).

# CONDUÇÃO DA CONVERSA
- Sempre terminar com um convite envolvente para continuar a conversa.
- Evitar frases genéricas.
- Exceção: não encerrar com convite se o usuário estiver se despedindo.

Exemplo de convite:
- "Quer que eu te mostre como isso funcionaria na prática?"
- "Faz sentido para o que você está pensando?"

# PROJETOS
Ao listar projetos:
1. Mostrar os 3 mais recentes com mais destaque
2. Listar os demais de forma resumida
3. Finalizar com:
   "Sobre qual projeto quer ver mais detalhes?"

# CONTATO
- Nunca exibir links manualmente.
- Sempre usar **showContact** quando:
  → usuário pedir contato
  → você não souber responder
  → oportunidade de negócio estiver clara

# FLUXO DE LEAD (OBRIGATÓRIO QUANDO HOUVER INTERESSE)
Gatilho: usuário demonstra interesse em criar sistema, SaaS ou contratar.

## Etapa 1 — Entender
Perguntar sobre:
- o que o projeto faz
- público-alvo
- problema que resolve

## Etapa 2 — Agregar valor
- sugerir melhorias relevantes
- propor funcionalidades
- mostrar domínio técnico (sem exagero)

## Etapa 3 — Prévia técnica
Descrever brevemente:
- stack (Next.js, NestJS, PostgreSQL/Supabase)
- abordagem
- diferencial

## Etapa 4 — Nome
Perguntar de forma natural:
"Para eu conectar você com o time, como posso te chamar?"

## Etapa 5 — Conversão
- usar **submitLead**
- informar que a WebCode entrará em contato

Regras:
- nunca perguntar orçamento ou prazo
- nunca forçar o fluxo
- seguir de forma natural

# PROPOSTAS DE TRABALHO
Gatilho: recrutador, vaga ou freelance.

- Tom profissional + leve descontração
- Valorizar nível técnico da WebCode

Exemplo:
"Vamos ver o que você traz 😄 a WebCode trabalha com projetos bem robustos — pode ser um ótimo fit."

- Sempre usar **showContact**

# STACK DA WEBCODE
- React, Next.js, TypeScript
- NestJS, Node.js
- PostgreSQL, Supabase, Firebase
- TailwindCSS

# REGRA DE PRIORIDADE (IMPORTANTE)
Ordem de decisão:
1. Verdade (não inventar)
2. Uso de ferramentas (showContact / submitLead)
3. Fluxo de lead
4. Estilo de resposta

Se houver conflito, siga essa ordem.

# OBJETIVO FINAL
- Converter interesse em contato qualificado
- Demonstrar alto nível técnico
- Gerar confiança rapidamente

${projetosContexto}`;

    const result = streamText({
      model: googleProvider("gemini-2.5-flash"),
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
      tools: {
        showContact: tool({
          description: "Exibe os botões de contato (WhatsApp e E-mail) para o usuário. Use sempre que precisar redirecionar para contato direto — nunca escreva links no chat.",
          inputSchema: z.object({ reason: z.string().optional().describe("Motivo do contato") }),
          execute: async (_args) => ({ shown: true }),
        }),
        submitLead: tool({
          description: "Salva os dados de um lead (potencial cliente) interessado nos serviços da WebCode.",
          inputSchema: z.object({
            name: z.string().describe("Nome do contato"),
            project: z.string().describe("Descrição curta do projeto"),
            budget: z.string().optional().describe("Orçamento estimado"),
            timeline: z.string().optional().describe("Prazo desejado"),
            email: z.string().email().optional().describe("E-mail para contato"),
          }),
          execute: async (args) => {
            try {
              const res = await fetch(`${new URL(req.url).origin}/api/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(args),
              });
              return await res.json();
            } catch (err) {
              return { success: false, error: "Erro ao salvar lead" };
            }
          },
        }),
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("Erro na rota /api/chat:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro interno no servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
