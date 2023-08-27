import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ceylonmade-218cc.firebaseapp.com",
  projectId: "ceylonmade-218cc",
  storageBucket: "ceylonmade-218cc.appspot.com",
  messagingSenderId: "826654290876",
  appId: "1:826654290876:web:29390b5d398bbd7b7431b9",
  measurementId: "G-3CXSMWFWK5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
