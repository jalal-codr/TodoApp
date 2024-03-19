// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from"firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJzDfmZ4V3lYxGecbzekwUDF-n0_ujtPc",
  authDomain: "awesomeproject-ed658.firebaseapp.com",
  projectId: "awesomeproject-ed658",
  storageBucket: "awesomeproject-ed658.appspot.com",
  messagingSenderId: "341195863797",
  appId: "1:341195863797:web:fb92add2b3ade95eb577bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();