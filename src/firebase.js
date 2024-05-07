// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDvPbdhug0mK5ZyjYxSUsSu8TLjBRimws",
  authDomain: "e-commerce-ccd35.firebaseapp.com",
  projectId: "e-commerce-ccd35",
  storageBucket: "e-commerce-ccd35.appspot.com",
  messagingSenderId: "520485368134",
  appId: "1:520485368134:web:3bd60afb5a332e7003f547",
  measurementId: "G-RH5W0DS2LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const myAuth=getAuth(app)
export const myProvider=new GoogleAuthProvider()