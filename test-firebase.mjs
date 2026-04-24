import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, limit, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVjDhpztIdgHn39_pxA4QZ-XeV0PR2cJk",
  authDomain: "portifolenext.firebaseapp.com",
  projectId: "portifolenext",
  storageBucket: "portifolenext.firebasestorage.app",
  messagingSenderId: "8503360641",
  appId: "1:8503360641:web:841dc48a52d36fc8e42180",
  measurementId: "G-WNT85REFJM",
};

async function testConnection() {
  console.log("Iniciando teste de conexão com o Firebase...");
  
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log("App e Firestore inicializados. Buscando documentos na coleção 'projeto'...");
    
    const q = query(collection(db, "projeto"), limit(1));
    const querySnapshot = await getDocs(q);
    
    console.log(`Conexão bem-sucedida! Foram encontrados ${querySnapshot.size} documentos.`);
    if (querySnapshot.size > 0) {
      console.log("Exemplo de documento recuperado:");
      console.log({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
    } else {
      console.log("A coleção existe e foi lida, mas não possui documentos.");
    }
  } catch (error) {
    console.error("Erro ao conectar no Firebase:", error);
  }
}

testConnection();
