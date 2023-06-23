
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  
    apiKey: "AIzaSyDQdvj3FCNFGt4oIDiL0cZw9bjp3UbfpNI",
    authDomain: "contact-2524.firebaseapp.com",
    databaseURL: "https://contact-2524-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contact-2524",
    storageBucket: "contact-2524.appspot.com",
    messagingSenderId: "97622436500",
    appId: "1:97622436500:web:683f94a14f7e8bba5e6281",
    measurementId: "G-LZ204M64K0"
    
// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// databaseURL: process.env.REACT_APP_DATABASE_URL,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID,
// measurementId: process.env.REACT_APP_MEASUREMENT_ID,

};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;