// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//console.log(import.meta.env.VITE_SOME_KEY);
console.log(import.meta.env.VITE_APIKEY);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
  // apiKey: "AIzaSyDLRQPxXDsr6sfUfrHC66wmhFvmWlrdlwE",
  // authDomain: "mega-realtor.firebaseapp.com",
  // projectId: "mega-realtor",
  // storageBucket: "mega-realtor.appspot.com",
  // messagingSenderId: "274996146321",
  // appId: "1:274996146321:web:efbb391ca1f1d6d1b70f30"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;