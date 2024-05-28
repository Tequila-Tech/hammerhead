// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyB_6ecGY1lppH6ExwWffTCK_y6QToYRwB4",
    authDomain: "hammerheaddb.firebaseapp.com",
    projectId: "hammerheaddb",
    storageBucket: "hammerheaddb.appspot.com",
    messagingSenderId: "540877574589",
    appId: "1:540877574589:web:f54fb69b857a8bd9e7c2d4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (for Firestore)
const db = getFirestore(app);

// Initialize Realtime Database (for Realtime Database)
const database = getDatabase(app);

export { db, database };
