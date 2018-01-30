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

// debugger;
// const productsApp = (state = {}, action) => ({
//   products: products(state, action),
//   categories: categories(state.categories, action),
//   lists: lists(state.lists, action),
//   visibilityFilter: visibilityFilter(state.visibilityFilter, action)
// });

export default productsApp;