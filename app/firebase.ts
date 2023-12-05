// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRJw1ItG_vhhUYKyO1GpXCgCmRcQ-t0ms",
  authDomain: "cyberdude-internship-profiles.firebaseapp.com",
  projectId: "cyberdude-internship-profiles",
  storageBucket: "cyberdude-internship-profiles.appspot.com",
  messagingSenderId: "848358143732",
  appId: "1:848358143732:web:b4425e0c623e64d0bd90a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
