import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAB1mnpWN27YNWaSCoRaYHcvHSJgb90ljw",
  authDomain: "practice-d4953.firebaseapp.com",
  projectId: "practice-d4953",
  storageBucket: "practice-d4953.appspot.com",
  messagingSenderId: "289853309974",
  appId: "1:289853309974:web:4d12d2c579555cec81a137",
  measurementId: "G-PVJ9H58MPK"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore =  getFirestore();

const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14');

console.log("Firebase testing is on!");