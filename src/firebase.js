// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo3jv3yaCqxDY0L1qwLtmTNJ2sdcqM3i8",
  authDomain: "babysitter-app-ffec6.firebaseapp.com",
  projectId: "babysitter-app-ffec6",
  storageBucket: "babysitter-app-ffec6.appspot.com",
  messagingSenderId: "727378806641",
  appId: "1:727378806641:web:e51790ae26d5c5f48c18d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



