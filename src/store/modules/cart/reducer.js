import * as types from '../types';
import axios from '../../../services/axios';

export const cartInitialState = {
  cart: [],
};

export default (state = cartInitialState, action) => {
  switch (action.type) {
    case types.UPDATE_CART: {
      const newState = { ...state };

      axios.post('user/cart/', {
        cartProducts: [...action.payload.cart],
      });

      newState.cart = [...action.payload.cart];

      return newState;
    }

    default:
      return state;
  }
};
