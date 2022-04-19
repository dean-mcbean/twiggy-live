import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCVsl4iGsjGw8Sha4GksMDaGN78KeEBf5U",
    authDomain: "twiggylive.firebaseapp.com",
    projectId: "twiggylive",
    storageBucket: "twiggylive.appspot.com",
    messagingSenderId: "946010312287",
    appId: "1:946010312287:web:f0e47fdb8b07183b5615ea",
    measurementId: "G-YWESMLK7T6"
  });

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Detect auth state
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
})