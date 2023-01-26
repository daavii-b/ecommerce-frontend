// import { useContext } from 'react';
import * as types from '../types';
// import { CartContext } from '../../../context/cart';

export const cartInitialState = {
  cart: [],
};

export default (state = cartInitialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_CART: {
      return state;
    }

    case types.REMOVE_PRODUCT_CART: {
      return state;
    }
    case types.CLEAR_CART: {
      return state;
    }
    default:
      return state;
  }
};
