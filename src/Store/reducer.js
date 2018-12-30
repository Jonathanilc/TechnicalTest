import React from "react";
import * as actionTypes from "../Actions/Type";

const initialState = {
  product: {
    title: "Classic Tee",
    price: 75,
    nS: 0,
    nM: 0,
    nL: 0
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return { ...state, product: action.product };
    default:
      return state;
  }
};

export default reducer;