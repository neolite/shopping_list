import * as types from '../actions/types';

const initialState = [
  {
    id: 1,
    name: 'Молоко',
    done: false,
    count: 2,
    list_id: 1
  },
  {
    id: 2,
    name: 'Хлеб',
    done: false,
    count: 1,
    list_id: 1
  },
  {
    id: 3,
    name: 'Яйца',
    done: false,
    count: 5,
    list_id: 1
  },
  {
    id: 4,
    name: 'Мыло жидкое',
    done: false,
    count: 1,
    list_id: 2
  },
  {
    id: 5,
    name: 'Салфетки',
    done: false,
    count: 10,
    list_id: 2
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return [...state, { id: action.id, name: action.name, done: false, count: 1, list_id: action.list_id }];
    case types.COMPLETE_PRODUCT:
      return state.map(product => (product.id === action.id ? { ...product, done: !product.done } : product));
    case types.INCREASE_PRODUCT_COUNT:
      return state.map(product => (product.id === action.id ? { ...product, count: product.count + 1 } : product));
    case types.DECREASE_PRODUCT_COUNT:
      return state.map(product => (product.id === action.id ? { ...product, count: product.count-1 } : product))
        .filter(el => el.count > 0);
    default:
      return state;
  }
}

export default products;