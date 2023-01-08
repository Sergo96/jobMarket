// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBTZ_yuxAxFf7DjJdY6pYJLY2HqFaM6ufc',
    authDomain: 'awesome-7f65d.firebaseapp.com',
    projectId: 'awesome-7f65d',
    storageBucket: 'awesome-7f65d.appspot.com',
    messagingSenderId: '914331940207',
    appId: '1:914331940207:web:84f76521db8acd4f02649a',
    measurementId: 'G-P5VJ2TVXS8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, app };
