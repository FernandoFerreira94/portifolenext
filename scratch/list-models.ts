
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function listModels() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("--- Modelos Disponíveis ---");
    if (data.models) {
      data.models.forEach((m: any) => {
        console.log(`- ${m.name} (${m.supportedGenerationMethods.join(", ")})`);
      });
    } else {
      console.log("Nenhum modelo encontrado ou erro na resposta:", data);
    }
  } catch (error) {
    console.error("Erro ao listar modelos:", error);
  }
}

listModels();
