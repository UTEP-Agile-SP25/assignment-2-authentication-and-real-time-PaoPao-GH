// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmoivkDRdQRB0vWX_jIzyzWPayoBa76_k",
  authDomain: "carballido-sandbox.firebaseapp.com",
  projectId: "carballido-sandbox",
  storageBucket: "carballido-sandbox.firebasestorage.app",
  messagingSenderId: "190243949069",
  appId: "1:190243949069:web:bc60c96673ccc16a09a344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app 