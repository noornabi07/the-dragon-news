// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHosgOSDNyj0JcH3qJ3ASi1X3adClyDN0",
  authDomain: "the-dragon-news-5efd6.firebaseapp.com",
  projectId: "the-dragon-news-5efd6",
  storageBucket: "the-dragon-news-5efd6.appspot.com",
  messagingSenderId: "191758157040",
  appId: "1:191758157040:web:622f8a547c478472a22e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app