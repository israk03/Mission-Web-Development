// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvs8DvpPoxtGk_coTEFZnLy-2pAR8iWXU",
  authDomain: "react-auth-integration-6f257.firebaseapp.com",
  projectId: "react-auth-integration-6f257",
  storageBucket: "react-auth-integration-6f257.firebasestorage.app",
  messagingSenderId: "260105938355",
  appId: "1:260105938355:web:ec995a3cb6908803a797c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
