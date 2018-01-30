import * as types from "../actions/types";

const initialState = [
  {id: 1, name: 'Список покупок', active: true, products: []}
];

const lists = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      return [
        ...state,
        { id: action.id, name: action.name, active: false, count: 1, products: [] }
      ];
    case types.DELETE_LIST:
      return state.filter(el => el.id !== action.id);
    case types.SET_LIST_ACTIVE:
      return state.map(list => (list.id === action.id ? { ...list, active: true } : { ...list, active: false }));
    default:
      return state;
  }
};

export default lists;