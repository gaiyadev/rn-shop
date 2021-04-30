import PRODUCTS from "../../../data/dummy-data";

initialState = {
  availableProducts: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.owneId === "u1"),
};

export default (state = initialState, action) => {
  return state;
};
