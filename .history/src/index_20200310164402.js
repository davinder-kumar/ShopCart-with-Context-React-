import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import {productProvider} from './context/products.context'

import './index.css';
import App from './App';
import productReducer from './store/reducers/products';


ReactDOM.render(
  <productProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </productProvider>,
  document.getElementById('root')
);
