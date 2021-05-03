import { Item } from "react-navigation-header-buttons";
import { ADD_ORDER } from "../actions/types";

export const addOrder = (cartItem, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: {
      items: cartItem,
      amount: totalAmount,
    },
  };
};
