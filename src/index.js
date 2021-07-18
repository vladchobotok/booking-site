import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD3SBUxGhfiT32GAwmFGppucXLWGNUs25A",
    authDomain: "booking-site-74e64.firebaseapp.com",
    databaseURL: "https://booking-site-74e64-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "booking-site-74e64",
    storageBucket: "booking-site-74e64.appspot.com",
    messagingSenderId: "529027238095",
    appId: "1:529027238095:web:da09e5e855e32cdec04fba"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
