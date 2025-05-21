import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVjDhpztIdgHn39_pxA4QZ-XeV0PR2cJk",
  authDomain: "portifolenext.firebaseapp.com",
  projectId: "portifolenext",
  storageBucket: "portifolenext.firebasestorage.app",
  messagingSenderId: "8503360641",
  appId: "1:8503360641:web:841dc48a52d36fc8e42180",
  measurementId: "G-WNT85REFJM",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
