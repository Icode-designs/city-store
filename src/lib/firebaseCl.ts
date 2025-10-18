// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF_Dj6gnL3BPnOgeEYHm3uTH6A_9c9BkY",
  authDomain: "city-store-ecommerce.firebaseapp.com",
  projectId: "city-store-ecommerce",
  storageBucket: "city-store-ecommerce.firebasestorage.app",
  messagingSenderId: "445013924757",
  appId: "1:445013924757:web:eb85bc7318d6f5e064f49c",
  measurementId: "G-QGETDYFYER",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
