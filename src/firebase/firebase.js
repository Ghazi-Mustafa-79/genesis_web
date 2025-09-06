// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Paste your Firebase config here (from Firebase console > Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyDfHxZ_p51bWXD3WTkfQlK3xsuigSIZMlE",
  authDomain: "mun-registration-25cc3.firebaseapp.com",
  projectId: "mun-registration-25cc3",
  storageBucket: "mun-registration-25cc3.firebasestorage.app",
  messagingSenderId: "1045392066795",
  appId: "1:1045392066795:web:cdab993a6f46c4b7ec96ae",
  measurementId: "G-XWT17N9YL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore (Database)
export const db = getFirestore(app);

// Storage (for file uploads like screenshots)
export const storage = getStorage(app);

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDfHxZ_p51bWXD3WTkfQlK3xsuigSIZMlE",
//   authDomain: "mun-registration-25cc3.firebaseapp.com",
//   projectId: "mun-registration-25cc3",
//   storageBucket: "mun-registration-25cc3.firebasestorage.app",
//   messagingSenderId: "1045392066795",
//   appId: "1:1045392066795:web:cdab993a6f46c4b7ec96ae",
//   measurementId: "G-XWT17N9YL1",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
