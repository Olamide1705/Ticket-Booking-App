
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXlpm1lOSkG3SsGD5isdSeIpKPnLviPbM",
  authDomain: "ticketing-form.firebaseapp.com",
  projectId: "ticketing-form",
  storageBucket: "ticketing-form.firebasestorage.app",
  messagingSenderId: "602959360653",
  appId: "1:602959360653:web:0f754e9f20eaea5b9b28c4",
  measurementId: "G-HN8Q00BSWR"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
