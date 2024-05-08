import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMxtfHE2RCFvVnnC3a0mHuhZ2QP34azsU",
    authDomain: "ledgers-10e90.firebaseapp.com",
    projectId: "ledgers-10e90",
    storageBucket: "ledgers-10e90.appspot.com",
    messagingSenderId: "862428326098",
    appId: "1:862428326098:web:c5df2b0a0d94e21b4de50b"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };