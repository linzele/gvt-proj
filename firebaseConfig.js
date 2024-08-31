// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFunctions } from "firebase/functions";
import 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsCDXymusjzTKpEXkEJ0pc1-P4ruA7_zY",
  authDomain: "lincoln-gvt-proj.firebaseapp.com",
  projectId: "lincoln-gvt-proj",
  storageBucket: "lincoln-gvt-proj.appspot.com",
  messagingSenderId: "773159068897",
  appId: "1:773159068897:web:8c0b2e00b65554679703a0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'select_content', {
  content_type: 'image',
  content_id: 'P12453'
});

export const myFunctions = getFunctions(app);