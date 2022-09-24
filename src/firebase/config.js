// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDJgRnSIH5u0Dp4Rf7vNaW15bnrL7mP1I',
  authDomain: 'esssi-netsuit.firebaseapp.com',
  projectId: 'esssi-netsuit',
  storageBucket: 'esssi-netsuit.appspot.com',
  messagingSenderId: '747140331412',
  appId: '1:747140331412:web:0dee3f96b91ea6b5804181',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
