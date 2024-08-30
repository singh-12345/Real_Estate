
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-marketplace-a05a6.firebaseapp.com",
  projectId: "realestate-marketplace-a05a6",
  storageBucket: "realestate-marketplace-a05a6.appspot.com",
  messagingSenderId: "1037737885759",
  appId: "1:1037737885759:web:89957c0a9df3cbca62f88a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);