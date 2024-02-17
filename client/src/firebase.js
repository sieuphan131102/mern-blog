// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bc45d.firebaseapp.com",
  projectId: "mern-blog-bc45d",
  storageBucket: "mern-blog-bc45d.appspot.com",
  messagingSenderId: "315216708805",
  appId: "1:315216708805:web:53657391bb99bdcd8e1cac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
