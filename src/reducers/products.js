import * as types from '../actions/types';

const initialState = [
  {
    name: "Banana",
    id: 1516951569602,
    done: false
  },
  {
    name: "Grapefruit",
    id: 1516951570480,
    done: false
  },
  {
    name: "Orange",
    id: 1516951571140,
    done: false
  },
  {
    name: "Apple",
    id: 1516951571876,
    done: false
  },
  {
    name: "Milk",
    id: 1516951573315,
    done: false
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return [...state, { id: action.id, name: action.name, done: false }];
    case types.COMPLETE_PRODUCT:
      return state.map(product => (product.id === action.id ? { ...product, done: !product.done } : product));
    default:
      return state
  }
}

export default products;