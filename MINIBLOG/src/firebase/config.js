import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3WuE0gJdIaGeUfHOD3TffegHIby9A-Dk",
  authDomain: "miniblog-e8ef7.firebaseapp.com",
  projectId: "miniblog-e8ef7",
  storageBucket: "miniblog-e8ef7.appspot.com",
  messagingSenderId: "29246735450",
  appId: "1:29246735450:web:a8c7cf5ef0a6615695c463"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };