// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjqeSeId8sw6mIo2OB908X7odpnN6vzBM",
  authDomain: "clone-461de.firebaseapp.com",
  projectId: "clone-461de",
  storageBucket: "clone-461de.appspot.com",
  messagingSenderId: "828204487276",
  appId: "1:828204487276:web:4e63593c078cbd1ffe3e49",
  measurementId: "G-CDJG80LTFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();   