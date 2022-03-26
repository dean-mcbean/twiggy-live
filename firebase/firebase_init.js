
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVsl4iGsjGw8Sha4GksMDaGN78KeEBf5U",
    authDomain: "twiggylive.firebaseapp.com",
    projectId: "twiggylive",
    storageBucket: "twiggylive.appspot.com",
    messagingSenderId: "946010312287",
    appId: "1:946010312287:web:f0e47fdb8b07183b5615ea",
    measurementId: "G-YWESMLK7T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// Manually Require both Firebase & Firestore
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");