import {
  collection,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/service/fireBaseConective";
import { ProjetoProps } from "./projeto";

export async function fetchAllProjetos() {
  try {
    const proRef = collection(db, "projeto");

    // Adicionando a ordenação pelo campo 'created' (mais recente primeiro)
    const q = query(proRef, orderBy("created", "desc"));
    const snapshot = await getDocs(q);

    const projetos = snapshot.docs.map((doc) => {
      const data: ProjetoProps = doc.data();
      const converted = {
        id: doc.id,
        ...data,
        created:
          data.created instanceof Timestamp
            ? data.created.toDate()
            : new Date(),
      };

      return converted;
    });

    return projetos;
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
}
