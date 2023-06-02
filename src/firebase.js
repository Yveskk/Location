// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyAhlXWNWy1-gJiSQMoFchg5ymhAM05b4dw",

  authDomain: "click-location-652ab.firebaseapp.com",

  projectId: "click-location-652ab",

  storageBucket: "click-location-652ab.appspot.com",

  messagingSenderId: "59507228998",

  appId: "1:59507228998:web:386ae936c4c18eba5ee547",

  measurementId: "G-60MFEQ9TGG"


};


// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
