import * as types from "./types";

export const addList = name => {
  return {
    type: types.ADD_LIST,
    id: Date.now(),
    name
  };
};


export const archiveList = id => {
  return {
    type: types.DELETE_LIST,
    id
  };
};

export const setActiveList = id => {
  return {
    type: types.SET_LIST_ACTIVE,
    id
  };
};
