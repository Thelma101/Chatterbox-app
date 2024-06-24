// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import React from 'react';
// import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';   

const firebaseConfig = {
  apiKey: "AIzaSyDqyKbF9eVoDfl0Fw5qGbG29EZYJ782Fqc",
  authDomain: "chatterbox-app-c4473.firebaseapp.com",
  projectId: "chatterbox-app-c4473",
  storageBucket: "chatterbox-app-c4473.appspot.com",
  messagingSenderId: "609415857465",
  appId: "1:609415857465:web:15d7fb4d28c98e62f414e8",
  measurementId: "G-0YY1ZP1VKW"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };