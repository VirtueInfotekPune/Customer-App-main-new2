// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBh9c6QCRAE2ogRsz0f6P3IXAhuWWxeNJ4",
    authDomain: "b2c-recent.firebaseapp.com",
    projectId: "b2c-recent",
    storageBucket: "b2c-recent.appspot.com",
    messagingSenderId: "393526762313",
    appId: "1:393526762313:web:b7915b2c173b410f8a1898",
    measurementId: "G-SJCGBWQ7ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
