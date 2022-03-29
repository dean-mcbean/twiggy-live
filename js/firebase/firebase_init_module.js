import { initializeApp } from './node_module/firebase/app';
import { getFirestore, collection, getDocs } from '/node_module/firebase/firestore/lite';
import { getAnalytics } from "/firebase/analytics";
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
const db = getFirestore(app);


/*
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}*/