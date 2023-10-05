// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6q3f9RKsdASFOi9v3mMo0-CGofG7YcIw",
  authDomain: "dragon-news-auth-af8ca.firebaseapp.com",
  projectId: "dragon-news-auth-af8ca",
  storageBucket: "dragon-news-auth-af8ca.appspot.com",
  messagingSenderId: "413679297276",
  appId: "1:413679297276:web:6b79f83e123c945ea06d79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;