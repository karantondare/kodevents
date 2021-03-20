import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuXDTCK36xi_h_IB2807mcPUXl0R7X96A",
  authDomain: "kodevents-karantondare.firebaseapp.com",
  projectId: "kodevents-karantondare",
  storageBucket: "kodevents-karantondare.appspot.com",
  messagingSenderId: "616458704041",
  appId: "1:616458704041:web:5dac944a57d34792c185b8",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
