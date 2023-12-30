// // Import the functions you need from the SDKs you need
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);




// NOTE: Read Note after Firebase initialization
// import firebase 
// import { initializeApp } from "firebase/app"
// import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
// import { connectAuthEmulator, getAuth } from "firebase/auth"
// import { connectFunctionsEmulator, getFunctions } from "firebase/functions"
// import { connectStorageEmulator, getStorage } from "firebase/storage"

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getFunctions } from "firebase/functions"
import { getStorage } from "firebase/storage"

// initialize firebase with your
// app credentials
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)
export const storage = getStorage(app)


//NOTE: The following were the different ways I tried to integrate Firestore emulator. Something on my TODO list - learn how to use Firebase Firestore emulator

// Emulator
// connectAuthEmulator(auth, "http://127.0.0.1:9099")
// connectFunctionsEmulator(functions, "127.0.0.1", 5001)
// connectFirestoreEmulator(db, '127.0.0.1', 8080)
// connectStorageEmulator(storage, "127.0.0.1", 9199)


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const isLocalhost = process.env.NODE_ENV === "development";


// // TODO: Use a configuration object
// const firebaseConfig = {
//   projectId: '',
//   appId: '',
//   databaseURL: '',
//   storageBucket: '',
//   locationId: '',
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST,
//   authDomain: '',
//   messagingSenderId: '',
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// if (isLocalhost) {
//   connectFirestoreEmulator(db, "localhost", 8080);
// }



// Import the functions you need from the SDKs you need
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


// // TODO: Use a configuration object
// const firebaseConfig = {
//   projectId: '',
//   appId: '',
//   databaseURL: '',
//   storageBucket: '',
//   locationId: '',
//   apiKey: 'AIzaSyAPubNfZLd6lnfZs-4NWfWgGEaQzjxV-3o',
//   authDomain: '',
//   messagingSenderId: '',
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// // eslint-disable-next-line no-restricted-globals
// if (location.hostname === 'localhost') {
//   connectFirestoreEmulator(db, '127.0.0.1', 8080);
// }

