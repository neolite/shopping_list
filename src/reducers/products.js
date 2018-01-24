import * as types from '../actions/types';

const initialState = [
  {
    name: 'Banana', 
    id: Math.ceil(Math.random() * 10000),
    completed: false
  }, 
  {
    name: 'Grapefruit', 
    id: Math.ceil(Math.random() * 10000),
    completed: false
  },
  {
    name: 'Orange', 
    id: Math.ceil(Math.random() * 10000),
    completed: false
  },  
  {
    name: 'Apple', 
    id: Math.ceil(Math.random() * 10000),
    completed: false
  }, 
  {
    name: 'Milk', 
    id: Math.ceil(Math.random() * 10000),
    completed: false
  }, 
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          completed: false
        }
      ]
    case types.COMPLETE_PRODUCT:
      return state.map(product =>
        (product.id === action.id)
          ? { ...product, completed: !product.completed }
          : product
      )
    default:
      return state
  }
}

export default products;