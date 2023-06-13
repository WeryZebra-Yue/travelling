import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRFfYh_JGN0PN8bmYDKefpK1-a00CU-cg",
  authDomain: "tourist-fire.firebaseapp.com",
  projectId: "tourist-fire",
  storageBucket: "tourist-fire.appspot.com",
  messagingSenderId: "110288598032",
  appId: "1:110288598032:web:b8ce1a6d8ae2b910d80695",
  measurementId: "G-KNR7263LW3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
