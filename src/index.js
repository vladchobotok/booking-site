import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCfLoOlxx_4aN6q0nEUfNF9cAD7TywBJGw",
    authDomain: "booking-site-8f94a.firebaseapp.com",
    databaseURL: "https://booking-site-8f94a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "booking-site-8f94a",
    storageBucket: "booking-site-8f94a.appspot.com",
    messagingSenderId: "301353529949",
    appId: "1:301353529949:web:a37d89c34095871c0e93b4",
    measurementId: "G-STFPBPGFS3"
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
