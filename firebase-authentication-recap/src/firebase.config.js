// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmFbJblazLyLD30AKl56YYdGTh_Q3K51M",
  authDomain: "react-firebase-authentic-c3fb6.firebaseapp.com",
  projectId: "react-firebase-authentic-c3fb6",
  storageBucket: "react-firebase-authentic-c3fb6.firebasestorage.app",
  messagingSenderId: "966506811528",
  appId: "1:966506811528:web:cda8fb173a350f91c44f3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
