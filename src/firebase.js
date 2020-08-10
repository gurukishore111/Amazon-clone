import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYHCQkBYb1iSVtmnZAEAz1jR-vQ8mp5GA",
  authDomain: "clone-71c7c.firebaseapp.com",
  databaseURL: "https://clone-71c7c.firebaseio.com",
  projectId: "clone-71c7c",
  storageBucket: "clone-71c7c.appspot.com",
  messagingSenderId: "993851259614",
  appId: "1:993851259614:web:b9febfe3f44d3a4a67e04f",
  measurementId: "G-PCQQ62MMQ6",
});

const auth = firebase.auth();

export { auth };
