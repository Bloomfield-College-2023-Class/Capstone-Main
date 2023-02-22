import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Imports redux
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state";
import { Provider } from 'react-redux';

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



