import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAz3Y5KrT2MreKSiuUh3vnWhhc4kSCKsBE",
  authDomain: "test-app-161f0.firebaseapp.com",
  databaseURL: "https://test-app-161f0.firebaseio.com",
  projectId: "test-app-161f0",
  storageBucket: "test-app-161f0.appspot.com",
  messagingSenderId: "601288532886",
  appId: "1:601288532886:web:20651a2a80f478786c33b7",
  measurementId: "G-9X00ZSL7K8",
};

firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase;

export { firebaseApp };
