import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Imports Parse
import Parse from 'parse/dist/parse.min.js';
// Imports redux
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state";
import { Provider } from 'react-redux';

// Application id key
const APP_ID = 'Ndm94BGqYG2Q5XU6A55yKELCwe0lfavIGOrf3rBa';
// JS Key
const JS_KEY = 'lrxLndB0z5LOQ4JJZYkUGX1DdcJUXk2eaHoB7wSP';
// Parse Server URL
const SERVER_HOST_URL = 'https://parseapi.back4app.com/';

//Initializing Parse
Parse.initialize(APP_ID, JS_KEY);
Parse.serverURL = SERVER_HOST_URL;

// Set up the redux store for access to it from anywhere
const store = configureStore({
  reducer: {
    global: globalReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



