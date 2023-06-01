// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm5k8SIsorgg1vVMFI2QHizqc6LHAtKy0",
  authDomain: "location-9b48a.firebaseapp.com",
  projectId: "location-9b48a",
  storageBucket: "location-9b48a.appspot.com",
  messagingSenderId: "376464328976",
  appId: "1:376464328976:web:71b749ac055c186228fd95",
  measurementId: "G-S0X1101N64"
};


// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
