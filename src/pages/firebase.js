// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyBktm8pzrFhi54Xyboq_ISlty_g2yXUSI8",
  authDomain: "skoolweb-4bbb2.firebaseapp.com",
  databaseURL: "https://skoolweb-4bbb2-default-rtdb.firebaseio.com",
  projectId: "skoolweb-4bbb2",
  storageBucket: "skoolweb-4bbb2.firebasestorage.app",
  messagingSenderId: "56751639359",
  appId: "1:56751639359:web:5e2d71e17b58fa9db8618a",
  measurementId: "G-7QZ31LM8YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Realtime Database को 'db' नाम से एक्सपोर्ट किया
export const db = getDatabase(app);