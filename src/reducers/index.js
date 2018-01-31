import { combineReducers } from 'redux'
import products from './products'
import categories from "./categories";
import lists from "./lists";
import visibilityFilter from './visibilityFilter'

const productsApp = combineReducers({
  products,
  categories,
  lists,
  visibilityFilter
})

export default productsApp;