import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLE0ixfDWsvVBzPS3z1UeVwX9-_o8Sjqo",
  authDomain: "the-unemployed-dev.firebaseapp.com",
  databaseURL: "https://the-unemployed-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-unemployed-dev",
  storageBucket: "the-unemployed-dev.appspot.com",
  messagingSenderId: "472026802908",
  appId: "1:472026802908:web:d16655054f151a2aa32219",
  measurementId: "G-JX8NRJ1DN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)

export default app;