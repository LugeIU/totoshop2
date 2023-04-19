// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqiGnbICxPD22gcFoQRaNvUtcpAKsizQE",
  authDomain: "totoshop-cb469.firebaseapp.com",
  projectId: "totoshop-cb469",
  storageBucket: "totoshop-cb469.appspot.com",
  messagingSenderId: "844770722337",
  appId: "1:844770722337:web:49073e50f4d9681a9fd960",
  measurementId: "G-ECCX415PNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




{
    "hosting": {
      "site": "totoshop",
  
      "public": "public",
      ...
    }
  }