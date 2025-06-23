// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKoXrUlAAyW2mBO7MgzNZc-wYkuGFqmQ",
  authDomain: "e-commerce-parfum.firebaseapp.com",
  projectId: "e-commerce-parfum",
  storageBucket: "e-commerce-parfum.firebasestorage.app",
  messagingSenderId: "841516179831",
  appId: "1:841516179831:web:3f2bb19819647c78dac172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);