import * as types from "../actions/types";

const initialState = [
  {id: 1, name: '234'},
  {id: 2, name: 'qweqe'},
  {id: 3, name: '1223123'}
];

const lists = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      return [
        ...state,
        { id: action.id, name: action.name, active: false, count: 1 }
      ];
    case types.DELETE_LIST:
      return state.filter(el => el.id !== action.id);
    case types.SET_LIST_ACTIVE:
      return state.map(product => (product.id === action.id ? { ...product, active: true } : { ...product, active: false }));
    default:
      return state;
  }
};

export default lists;
