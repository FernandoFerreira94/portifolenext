
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDVjDhpztIdgHn39_pxA4QZ-XeV0PR2cJk",
  authDomain: "portifolenext.firebaseapp.com",
  projectId: "portifolenext",
  storageBucket: "portifolenext.firebasestorage.app",
  messagingSenderId: "8503360641",
  appId: "1:8503360641:web:841dc48a52d36fc8e42180",
};

async function testFetch() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log("--- Projetos (collection 'projeto') ---");
    const snap = await getDocs(collection(db, "projeto"));
    console.log("Count Total:", snap.size);
    snap.docs.forEach(doc => {
        const data = doc.data();
        console.log(`- ${data.nome || doc.id} | is_academico: ${data.is_academico}`);
    });

  } catch (error) {
    console.error("Erro no teste:", error);
  }
}

testFetch();
