import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9d0aa.firebaseapp.com",
  projectId: "reactchat-9d0aa",
  storageBucket: "reactchat-9d0aa.appspot.com",
  messagingSenderId: "147459143740",
  appId: "1:147459143740:web:693d807ffc2e83e8e1ab39",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
