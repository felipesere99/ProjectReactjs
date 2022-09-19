// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzZnUEq7IstIzCACXHogrtFiK2sY7aPhc",
  authDomain: "ecommercereact-coder.firebaseapp.com",
  projectId: "ecommercereact-coder",
  storageBucket: "ecommercereact-coder.appspot.com",
  messagingSenderId: "206279733151",
  appId: "1:206279733151:web:ceeb6c838522c3e84f57aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);