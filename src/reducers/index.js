import { combineReducers } from 'redux'
import products from './products'
import visibilityFilter from './visibilityFilter'

const productsApp = combineReducers({
  products,
  visibilityFilter
})

export default productsApp;