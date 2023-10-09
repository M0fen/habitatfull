// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'habitat-396d1.firebaseapp.com',
  projectId: 'habitat-396d1',
  storageBucket: 'habitat-396d1.appspot.com',
  messagingSenderId: '321213218953',
  appId: '1:321213218953:web:097c8ebf027bb163910658',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
