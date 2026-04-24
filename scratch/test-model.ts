
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function testModel() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  const model = "gemini-2.0-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Oi, você está funcionando?" }] }]
      })
    });
    const data = await response.json();
    if (data.error) {
      console.log(`Erro no modelo ${model}:`, data.error.message);
    } else {
      console.log(`Sucesso no modelo ${model}:`, data.candidates[0].content.parts[0].text);
    }
  } catch (error) {
    console.error("Erro no teste:", error);
  }
}

testModel();
