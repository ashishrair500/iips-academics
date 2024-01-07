import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmJMZB_kDW3woqxnSyhNiQk3b5QrX0TSA",
  authDomain: "topnote-3baa4.firebaseapp.com",
  projectId: "topnote-3baa4",
  storageBucket: "topnote-3baa4.appspot.com",
  messagingSenderId: "625141872998",
  appId: "1:625141872998:web:981f32055efa6856b030a7",
  databaseURL: 'https://topnote-3baa4-default-rtdb.firebaseio.com/'
};

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { fire, db, storage };
