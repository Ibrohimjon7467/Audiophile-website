import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpx6aix2r9fHEYVgzF3NB7_ZG9zd5Qlig",
  authDomain: "audiophile-ibr.firebaseapp.com",
  projectId: "audiophile-ibr",
  storageBucket: "audiophile-ibr.appspot.com",
  messagingSenderId: "465055399186",
  appId: "1:465055399186:web:a52466aba4184d9b6a87cb",
  measurementId: "G-VYN84E4E97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;