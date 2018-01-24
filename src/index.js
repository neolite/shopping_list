import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import shoppingListApp from './reducers'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './containers/App'

let store = createStore(shoppingListApp, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
      <App /> 
  </Provider>, 
  document.getElementById('root')
);
