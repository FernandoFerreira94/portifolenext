
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const models = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-2.5-flash",
  "gemini-flash-latest",
  "gemma-3-1b-it"
];

async function findWorkingModel() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  
  for (const model of models) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Hi" }] }]
        })
      });
      const data = await response.json();
      if (!data.error) {
        console.log(`✅ MODELO FUNCIONANDO: ${model}`);
        return;
      } else {
        console.log(`❌ ${model}: ${data.error.message.split(".")[0]}`);
      }
    } catch (e) {
      console.log(`❌ ${model}: Erro de rede`);
    }
  }
  console.log("‼️ Nenhum modelo funcionou com esta chave.");
}

findWorkingModel();
