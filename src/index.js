/*global require */
/*eslint no-undef: "error"*/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import shoppingListApp from './reducers'
import './animate.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './containers/App'

window.Chart = require("chart.js");

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

const store = createStoreWithMiddleware(
  shoppingListApp,
  load(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);    

render(
  <Provider store={store}>
      <App /> 
  </Provider>, 
  document.getElementById('root')
);
