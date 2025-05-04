// ! NOT TO SHARE IT AND REMOVE BEFORE HOSTING AND PUSHING IN THE GITHUB[GITHUB AT LAST] 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_7y0vTMBL0usxbPJdVnWqW3H_0iccQrI",
  authDomain: "careerfind-568f3.firebaseapp.com",
  projectId: "careerfind-568f3",
  storageBucket: "careerfind-568f3.firebasestorage.app",
  messagingSenderId: "219521641260",
  appId: "1:219521641260:web:61bfd70e0617227b9e5a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);