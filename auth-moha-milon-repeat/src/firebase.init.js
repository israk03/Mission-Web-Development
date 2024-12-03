// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuPY9bYJPJLchVTQNWNiAgun-UeS3Cefs",
  authDomain: "auth-moha-milon-d3d37.firebaseapp.com",
  projectId: "auth-moha-milon-d3d37",
  storageBucket: "auth-moha-milon-d3d37.firebasestorage.app",
  messagingSenderId: "611853211553",
  appId: "1:611853211553:web:89fbe116beab3769d4dde0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
