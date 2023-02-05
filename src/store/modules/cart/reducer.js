// import { toast } from 'react-toastify';
import * as types from '../types';

export const cartInitialState = {
  cartProducts: [],
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
