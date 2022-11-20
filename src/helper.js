import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC8o_MPM5EEqOes0Lb8Zy1CJSAVYG0n564",
  authDomain: "fir-5076c.firebaseapp.com",
  projectId: "fir-5076c",
  storageBucket: "fir-5076c.appspot.com",
  messagingSenderId: "66367417740",
  appId: "1:66367417740:web:aee760b5ff5f1465af3aa9",
};
firebase.initializeApp(firebaseConfig);
export const database = firebase.database().ref("/notes");
