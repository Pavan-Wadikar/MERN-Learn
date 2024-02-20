// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-oauth-cc816.firebaseapp.com",
  projectId: "mern-oauth-cc816",
  storageBucket: "mern-oauth-cc816.appspot.com",
  messagingSenderId: "442933669510",
  appId: "1:442933669510:web:dcb3eb8a2ea6a9fbcd6b07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// import.meta.env.VITE_FIREBASE_API_KEY