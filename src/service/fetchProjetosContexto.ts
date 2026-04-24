import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "@/service/fireBaseConective";

interface ProjetoResumo {
  id: string;
  nome: string;
  descricao: string;
  front: string;
  back: string;
  database: string;
  url: string;
  github: string;
  is_academico: boolean;
  funcionalidade: string[];
}

export async function fetchProjetosContexto(): Promise<string> {
  try {
    const snapshot = await getDocs(collection(db, "projeto"));

    const projetos: ProjetoResumo[] = snapshot.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        nome: d.nome || "",
        descricao: d.descricao || "",
        front: d.front || "",
        back: d.back || "",
        database: d.database || "",
        url: d.url || "",
        github: d.github || "",
        is_academico: d.is_academico || false,
        funcionalidade: d.funcionalidade || [],
      };
    });

    const linhas = projetos.map(
      (p) =>
        `- **${p.nome}** (${p.is_academico ? "Acadêmico" : "Profissional"})
  Descrição: ${p.descricao.slice(0, 300)}
  Front-end: ${p.front}
  Back-end: ${p.back}
  Banco de dados: ${p.database}
  URL: ${p.url || "Não disponível"}
  GitHub: ${p.github || "Não disponível"}
  Funcionalidades: ${p.funcionalidade.join(", ") || "—"}`
    );

    return linhas.join("\n\n");
  } catch (error) {
    console.error("Erro ao buscar projetos para contexto:", error);
    return "Nenhum projeto disponível no momento.";
  }
}
