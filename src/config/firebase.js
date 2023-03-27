import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCHz0jBzxwe06xkP0nZ_DfA-4feNEFs42o",
  authDomain: "fir-react-f9e4b.firebaseapp.com",
  projectId: "fir-react-f9e4b",
  storageBucket: "fir-react-f9e4b.appspot.com",
  messagingSenderId: "578597510108",
  appId: "1:578597510108:web:aebaecc47fc255674c8d19",
  measurementId: "G-E3T8XLPR4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);