import * as types from '../actions/types';

const initialState = [
  // {
  //   name: "Banana",
  //   id: 1516951569602,
  //   done: false,
  //   count: 1
  // },
  // {
  //   name: "Grapefruit",
  //   id: 1516951570480,
  //   done: false,
  //   count: 1
  // },
  // {
  //   name: "Orange",
  //   id: 1516951571140,
  //   done: false,
  //   count: 1
  // },
  // {
  //   name: "Apple",
  //   id: 1516951571876,
  //   done: false,
  //   count: 1
  // },
  // {
  //   name: "Milk",
  //   id: 1516951573315,
  //   done: false,
  //   count: 1
  // }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return [...state, { id: action.id, name: action.name, done: false, count: 1 }];
    case types.COMPLETE_PRODUCT:
      return state.map(product => (product.id === action.id ? { ...product, done: !product.done } : product));
    case types.INCREASE_PRODUCT_COUNT:
      return state.map(product => (product.id === action.id ? { ...product, count: product.count+1 } : product));
    case types.DECREASE_PRODUCT_COUNT:
      return state.map(product => (product.id === action.id ? { ...product, count: product.count-1 } : product))
        .filter(el => el.count > 0);
    default:
      return state
  }
}

export default products;