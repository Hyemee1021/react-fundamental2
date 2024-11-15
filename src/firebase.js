// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { doc, setDoc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL-lvM7xN593SiBNnkwa4mxDHCT9jVkVU",
  authDomain: "signin-signup-7cb7e.firebaseapp.com",
  projectId: "signin-signup-7cb7e",
  storageBucket: "signin-signup-7cb7e.firebasestorage.app",
  messagingSenderId: "891551059342",
  appId: "1:891551059342:web:d088ae712c10ec8b48e8df",
  measurementId: "G-GNERWDF9CG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the auth service- I cnat manipulate authentication-users
// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

// Function to create or update the user's document in Firestore
const createOrUpdateUserDoc = async (user) => {
  const { uid, email } = user; // Extract necessary fields

  const userDocRef = doc(db, "users", uid); // Reference the user's document

  try {
    // 1. The user's email is stored as a field in the document.
    //2. The { merge: true } option ensures that if a document with the same uid already exists, only the new fields are updated (instead of overwriting the entire document).
    await setDoc(userDocRef, { email }, { merge: true });
    console.log("User document created/updated successfully in Firestore.");
  } catch (error) {
    console.error("Error creating/updating user document:", error.message);
  }
};
// Signup function
export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User signed up:", userCredential.user);
    // The userCredential.user contains the user's unique ID (uid) and email.
    // Create/update Firestore document after signing up
    await createOrUpdateUserDoc(userCredential.user);

    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error; // You can display this error in the UI
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};
