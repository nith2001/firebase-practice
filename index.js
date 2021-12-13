// How to Run: Type into the terminal:
// >> node index.js

const { initializeApp } = require('firebase/app');
const { getFirestore, addDoc, collection } = require('firebase/firestore');

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
console.log("Initialized app!");

const db =  getFirestore(firebaseApp);
console.log("Got firestore!");


async function addingDoc() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

addingDoc();