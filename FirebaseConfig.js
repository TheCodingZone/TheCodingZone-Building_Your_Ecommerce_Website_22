// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-GLvAGCr9Omb6wr8k0fvBmT4JyRHRqHk",
  authDomain: "authentication01-cee36.firebaseapp.com",
  projectId: "authentication01-cee36",
  storageBucket: "authentication01-cee36.appspot.com",
  messagingSenderId: "37119254198",
  appId: "1:37119254198:web:f2894c8e73e416b6499017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth();
 export {app,auth}