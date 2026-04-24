import { fetchProjetosProfissionais } from "../src/service/fetchProjetosProfissionais";
import { fetchProjetoAcademicos } from "../src/service/fetchProjetoAcademicos";

async function test() {
  console.log("Fetching Profissionais...");
  const prof = await fetchProjetosProfissionais();
  console.log("Profissionais found:", prof.length);
  
  console.log("Fetching Academicos...");
  const acad = await fetchProjetoAcademicos();
  console.log("Academicos found:", acad.length);
}

test().catch(console.error);
