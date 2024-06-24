// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJl6_OZ3Nwj_EGmDXvWwL6GKyjIiKLMYQ",
  authDomain: "chatterbox-app-eaa11.firebaseapp.com",
  projectId: "chatterbox-app-eaa11",
  storageBucket: "chatterbox-app-eaa11.appspot.com",
  messagingSenderId: "103018436241",
  appId: "1:103018436241:web:c335f1b8a9086a2a27d130",
  measurementId: "G-S94J3D928W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);