// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBNrZu2_O4ZLCkWe6CIILoH5JyQYMyKJQ",
  authDomain: "cogsec-24e66.firebaseapp.com",
  projectId: "cogsec-24e66",
  storageBucket: "cogsec-24e66.firebasestorage.app",
  messagingSenderId: "512251642054",
  appId: "1:512251642054:web:a27517e0561919b3a1d7c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export default app;