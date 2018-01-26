import { combineReducers } from 'redux'
import products from './products'
import categories from "./categories";
import visibilityFilter from './visibilityFilter'

const productsApp = combineReducers({
  products,
  categories,
  visibilityFilter
})

export default productsApp;