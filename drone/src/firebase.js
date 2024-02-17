// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore for Firestore

const firebaseConfig = {

  apiKey: "AIzaSyAZgXZAJzCcVGYB0m63Sw6R0dmiI76ZinM",

  authDomain: "drone-cc292.firebaseapp.com",

  projectId: "drone-cc292",

  storageBucket: "drone-cc292.appspot.com",

  messagingSenderId: "276290017082",

  appId: "1:276290017082:web:04122561f2cd78522da203",

  measurementId: "G-WYDP6WH47L"

};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp); // Initialize Firestore and getFirestore
export { auth, db };
