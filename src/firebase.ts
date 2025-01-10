// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCIb4iW3HYH_S5-ukT_g4y_Go-g_4qqTE",
  authDomain: "club-page-app.firebaseapp.com",
  projectId: "club-page-app",
  storageBucket: "club-page-app.firebasestorage.app",
  messagingSenderId: "1033397742399",
  appId: "1:1033397742399:web:65ba42b61cf6b2acbc018a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };