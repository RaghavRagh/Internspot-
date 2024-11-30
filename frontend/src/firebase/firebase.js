import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0z0mEBgVztEYjjt1WZgBQhSvoaiaCVG0",
  authDomain: "internwebapp-5c05c.firebaseapp.com",
  projectId: "internwebapp-5c05c",
  storageBucket: "internwebapp-5c05c.appspot.com",
  messagingSenderId: "572004131221",
  appId: "1:572004131221:web:4bd036aa20f2a7579fd69c",
  measurementId: "G-YNNY6BKD2D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
