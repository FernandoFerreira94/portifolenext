import {
  collection,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/service/fireBaseConective";
import { ProjetoProps } from "@/app/utils/type";

export async function fetchAllProjetos() {
  try {
    const proRef = collection(db, "projeto");
    const q = query(proRef, orderBy("created", "desc"));
    const snapshot = await getDocs(q);

    const projetos = snapshot.docs.map((doc) => {
      const data = doc.data() as Partial<ProjetoProps>;

      const converted: ProjetoProps = {
        id: doc.id,
        nome: data.nome || "",
        back: data.back || "",
        front: data.front || "",
        descricao: data.descricao || "",
        funcionalidade: data.funcionalidade || [],
        img: data.img || "",
        url: data.url || "",
        html: data.html || false,
        javascript: data.javascript || false,
        react: data.react || false,
        typescript: data.typescript || false,
        next: data.next || false,
        css: data.css || false,
        tailwind: data.tailwind || false,
        sass: data.sass || false,
        node: data.node || false,
        firebase: data.firebase || false,
        mysql: data.mysql || false,
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
