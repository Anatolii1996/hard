/* eslint-disable */
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAldCToeELP_ljjpUz2RM-NDkd6cO81PEw",
  authDomain: "laboratory-3-b55c3.firebaseapp.com",
  projectId: "laboratory-3-b55c3",
  storageBucket: "laboratory-3-b55c3.appspot.com",
  messagingSenderId: "1035709237226",
  appId: "1:1035709237226:web:1e70f7413a223baa561493"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();