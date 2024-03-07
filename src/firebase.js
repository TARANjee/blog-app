
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYNf3gqTYrFT1njehayXvDYrXu6yJOyg8",
    authDomain: "my-blogs-cca58.firebaseapp.com",
    databaseURL: "https://my-blogs-cca58-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-blogs-cca58",
    storageBucket: "my-blogs-cca58.appspot.com",
    messagingSenderId: "502747554416",
    appId: "1:502747554416:web:844471440abdfb82044ab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
