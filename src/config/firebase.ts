import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwUH9MAKlxyigKadL-LPnwTtMQIbyC-bY",
  authDomain: "fitneogin-51eaf.firebaseapp.com",
  projectId: "fitneogin-51eaf",
  storageBucket: "fitneogin-51eaf.firebasestorage.app",
  messagingSenderId: "865859188005",
  appId: "1:865859188005:web:f06c3ac73202cf3f4b96cc",
  measurementId: "G-TDLLGE75LG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Optional: Set persistence to local (survives browser restarts)
setPersistence(auth, browserLocalPersistence);

export { auth };
