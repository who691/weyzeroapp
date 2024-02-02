import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import {getStorage }  from "firebase/storage"; 

import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4HVHrIFx1WDiJOOO8mq4qildraimdHPM",
  authDomain: "realtry-5a403.firebaseapp.com",
  projectId: "realtry-5a403",
  storageBucket: "realtry-5a403.appspot.com",
  messagingSenderId: "567091626359",
  appId: "1:567091626359:web:c88bfffda774ed4cd2a172"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)

export const storage=getStorage(app)

export const auth = firebase.auth();