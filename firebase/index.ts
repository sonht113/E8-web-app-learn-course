import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAWx_8xyE1PeGw5gDkTc2LDGNb71Hd1L1Q',
  authDomain: 'web-app-teach-el-online.firebaseapp.com',
  projectId: 'web-app-teach-el-online',
  storageBucket: 'web-app-teach-el-online.appspot.com',
  messagingSenderId: '958008235720',
  appId: '1:958008235720:web:96465508bfd32e7d5eb7fd',
  measurementId: 'G-XVZ3RQ61ZP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const providerGoogle = new GoogleAuthProvider();
export const providerFacebook = new FacebookAuthProvider();
