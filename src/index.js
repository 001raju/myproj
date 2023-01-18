import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./scss/main.scss"; //scss in global css so we import here not in app.js


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


