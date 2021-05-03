import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/types";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    pid: productId,
  };
};
