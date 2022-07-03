import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store } from './redux/store';
import { Provider } from "react-redux";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Provider store={store}>
      <BrowserRouter  basename="/test2-goit-react-hw-08-phonebook" >
        <App />
        </BrowserRouter>
      </Provider>
      
  </React.StrictMode>
);

