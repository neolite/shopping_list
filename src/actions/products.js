import * as types from "./types";

export const addProduct = (name, list_id) => {
  return { type: types.ADD_PRODUCT, id: Date.now(), name, list_id };
};

export const completeProduct = id => {
  return {
    type: types.COMPLETE_PRODUCT,
    id
  };
};

export const increaseProductCount = id => {
  return {
    type: types.INCREASE_PRODUCT_COUNT,
    id
  };
};

export const decreaseProductCount = id => {
  return {
    type: types.DECREASE_PRODUCT_COUNT,
    id
  };
};
