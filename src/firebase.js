// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB1LGJ4JwFX-IYVC_S7xEkeelSEJeHBJ8g',
  authDomain: 'lunivofirebase.firebaseapp.com',
  projectId: 'lunivofirebase',
  storageBucket: 'lunivofirebase.firebasestorage.app',
  messagingSenderId: '463837496973',
  appId: '1:463837496973:web:9c6cbff1dacc3c430d84c4',
  measurementId:'G-Y1FG3GDBJZ'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };