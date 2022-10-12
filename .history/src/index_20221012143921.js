import React from 'react';
import {store} from "./app/store"
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Provider>
);

