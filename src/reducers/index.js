import { combineReducers } from 'redux'
import products from './products';
import lists from './lists';

const productsApp = combineReducers({
  products,
  lists,
});

export default productsApp;