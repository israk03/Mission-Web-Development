// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZh_zeSBOb6KexAYzF4CBmPaMe6Tr3HpY",
  authDomain: "email-password-auth-91c85.firebaseapp.com",
  projectId: "email-password-auth-91c85",
  storageBucket: "email-password-auth-91c85.firebasestorage.app",
  messagingSenderId: "646583769873",
  appId: "1:646583769873:web:74356b76ea3dc005d80ab0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
