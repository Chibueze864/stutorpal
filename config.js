// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDzYQmD4m1YTOK5Yfd1U93dMDJ51qV6uYI",

  authDomain: "official-site-23bc8.firebaseapp.com",

  projectId: "official-site-23bc8",

  storageBucket: "official-site-23bc8.appspot.com",

  messagingSenderId: "128397216915",

  appId: "1:128397216915:web:5ea9fb2f20926396929166",

  measurementId: "G-TYQ4JX6CD1"

};


// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app)

 export {app, auth, db};
