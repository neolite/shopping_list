import * as types from './types';

export const addProduct = name => {
  return {
    type: types.ADD_PRODUCT,
    id: Date.now(),
    name
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const completeProduct = id => {
  return {
    type: types.COMPLETE_PRODUCT,
    id
  }
}

export const increaseProductCount = id => {
  return {
    type: types.INCREASE_PRODUCT_COUNT,
    id
  }
}

export const decreaseProductCount = id => {
  return {
    type: types.DECREASE_PRODUCT_COUNT,
    id
  }
}