import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA8X-9WyrJ3Lw3r3GU6CnPVoyDYfS1Pb9o",
  authDomain: "cellularvive.firebaseapp.com",
  projectId: "cellularvive",
  storageBucket: "cellularvive.appspot.com",
  messagingSenderId: "793735877880",
  appId: "1:793735877880:web:6ff6addaaaa7802a82170d"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
