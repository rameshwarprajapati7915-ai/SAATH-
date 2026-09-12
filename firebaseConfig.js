import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMkhW31r-fGe6UTEVWwmXX5t4F4netScI",
  authDomain: "saath-v4.firebaseapp.com",
  projectId: "saath-v4",
  storageBucket: "saath-v4.firebasestorage.app",
  messagingSenderId: "741038040699",
  appId: "1:741038040699:web:139f93908a2e6d1b4aa4de",
  measurementId: "G-CBY2T63MPS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
