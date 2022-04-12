// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALvD08MJvsIcClEug4IvvWabMYbL--8aM",
  authDomain: "hotel-booking-services-83c68.firebaseapp.com",
  projectId: "hotel-booking-services-83c68",
  storageBucket: "hotel-booking-services-83c68.appspot.com",
  messagingSenderId: "508844968125",
  appId: "1:508844968125:web:fb1402a9cb59ba57e58fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;