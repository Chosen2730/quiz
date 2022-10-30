import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEQ-spR_QgpSHM9skgNVxd8kUOo5ARuaE",
  authDomain: "quiz-350a9.firebaseapp.com",
  projectId: "quiz-350a9",
  storageBucket: "quiz-350a9.appspot.com",
  messagingSenderId: "938529573764",
  appId: "1:938529573764:web:8064a0efd43632ecd3ebd1",
  measurementId: "G-TT9P52EDHQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
