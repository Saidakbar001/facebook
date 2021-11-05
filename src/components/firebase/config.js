import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD2r15q2mlDwhWpMXkbkcLCjfCpWWA4e0A",
    authDomain: "dan-otish.firebaseapp.com",
    projectId: "dan-otish",
    storageBucket: "dan-otish.appspot.com",
    messagingSenderId: "72369072139",
    appId: "1:72369072139:web:646cb3f3e403229a597f0e",
    measurementId: "G-1T3P06EQ6X"
  };

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
