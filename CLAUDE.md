# ProjetoAdd

## Objetivo
Criar uma rota interna em `/projetoadd` para cadastrar e editar documentos da collection `projeto` no Firestore, sem quebrar o visual já usado no portfólio.

## Contexto atual
- O site usa Next.js App Router com UI escura, cards translúcidos, bordas suaves e destaque em gradientes/aurora.
- A vitrine de projetos lê a collection `projeto` do Firestore.
- Os projetos profissionais são filtrados por `is_academico == false`.

## Shape real do projeto
Campos já usados pelo código:

- `nome: string`
- `descricao: string`
- `front: string`
- `back: string`
- `database: string`
- `funcionalidade: string[]`
- `url: string`
- `github: string`
- `is_academico: boolean`
- `created: Timestamp | Date`

Flags booleanas já lidas na UI:

- `html`
- `javascript`
- `react`
- `typescript`
- `next`
- `css`
- `sass`
- `tailwind`
- `node`
- `nest`
- `express`
- `firebase`
- `postgressql`
- `figma`
- `shancn`
- `reactNative`
- `supabase`

Campos existentes no tipo, mas hoje pouco usados na vitrine:

- `img`
- `figmaUrl`

## Decisão para a página
A página `/projetoadd` precisa ter:

1. formulário principal para criar projeto
2. listagem dos projetos existentes
3. ação de editar preenchendo o mesmo formulário
4. persistência direta no Firestore

## Regras de implementação
- Manter visual coerente com o site principal:
  - fundo escuro
  - cards com blur/transparência
  - tipografia e espaçamento consistentes
  - botões no mesmo tom dos CTAs atuais
- Não criar painel admin genérico demais.
- Priorizar usabilidade para cadastro rápido.

## UX esperada
- Campos textuais:
  - nome
  - descricao
  - front
  - back
  - database
  - github
  - url
- `funcionalidade` editável como lista simples
- toggles/checkboxes para stacks booleanas
- botão de salvar
- botão de atualizar quando estiver em modo edição
- botão para limpar/resetar formulário

## Observações importantes
- O campo `postgressql` está escrito assim no código atual e deve ser mantido para compatibilidade com os documentos existentes.
- O campo `shancn` também está escrito assim no projeto atual e deve ser mantido.
- Ao criar novo projeto, preencher flags não informadas com `false`.
- `created` deve usar timestamp do servidor no create e ser preservado no update.
- A vitrine atual ainda escolhe imagens por `nome`, então novos projetos sem imagem mapeada cairão no placeholder padrão.
