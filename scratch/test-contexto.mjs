import { fetchProjetosContexto } from "./src/service/fetchProjetosContexto";

async function test() {
  try {
    const context = await fetchProjetosContexto();
    console.log("Contexto recuperado:", context);
  } catch (e) {
    console.error("Erro no teste:", e);
  }
}

test();
