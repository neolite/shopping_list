import * as types from "../actions/types";

const initialState = [
  {id: 1, name: 'Список покупок', active: true, archive: false},
  {id: 2, name: 'Взять в хозмаге', active: false, archive: false},
];

const lists = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      state = state.map(list => (list.id === action.id ? { ...list, active: true } : { ...list, active: false }));
      return [...state, { id: action.id, name: action.name, active: true, archive: false, count: 1, products: [] }];
    case types.ARCHIVE_LIST:
      state = state.map(list => (list.id === action.id ? { ...list, archive: true, active: false } : list));
      return state.map((list, i) => (i === 0 ? { ...list, active: true } : list));
    case types.SET_LIST_ACTIVE:
      return state.map(list => (list.id === action.id ? { ...list, active: true } : { ...list, active: false }));
    default:
      return state;
  }
};

export default lists;