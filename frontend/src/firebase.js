// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBK2plulo5W6HQ86Fu2Jh3UDuh-4DxXU0",
  authDomain: "neighborhoodbakers-c22cc.firebaseapp.com",
  projectId: "neighborhoodbakers-c22cc",
  storageBucket: "neighborhoodbakers-c22cc.appspot.com",
  messagingSenderId: "1088883507517",
  appId: "1:1088883507517:web:40184e6e4fce2a01038554",
  measurementId: "G-4YQ50NLQD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();