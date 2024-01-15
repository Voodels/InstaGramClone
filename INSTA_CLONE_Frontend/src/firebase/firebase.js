// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDIbIQ595LzO5QxpDslzbqhmKAm2lE_st0",
  authDomain: "instagram-clone-backend-2a4d0.firebaseapp.com",
  projectId: "instagram-clone-backend-2a4d0",
  storageBucket: "instagram-clone-backend-2a4d0.appspot.com",
  messagingSenderId: "448053449396",
  appId: "1:448053449396:web:879fb9c020d0526c53bde1",
  measurementId: "G-T3HB3NRWZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage,app };

