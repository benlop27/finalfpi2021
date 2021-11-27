// Conveniently import this file anywhere to use db

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDT_OMtFIbUNpQF5IiZ_5WHpGxjXBkdJk4",
  authDomain: "vue-firebase-fpi2021.firebaseapp.com",
  projectId: "vue-firebase-fpi2021",
  storageBucket: "vue-firebase-fpi2021.appspot.com",
  messagingSenderId: "266069003745",
  appId: "1:266069003745:web:21cb5d3d5813d6c7e8d6a0"
};
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

export const storage = fb.storage();

// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
