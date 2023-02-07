// import { toast } from 'react-toastify';
import { toast } from 'react-toastify';
import * as types from '../types';

export const cartInitialState = {
  cartProducts: [],
};

export default (state = cartInitialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_CART: {
      const newState = { ...state };
      newState.cartProducts = action.payload.productsCart;
      toast.info('Product has been successfully added to cart');
      return newState;
    }

    case types.REMOVE_PRODUCT_CART: {
      const newState = { ...state };
      newState.cartProducts = action.payload.productsCart;

      toast.info('Product has been successfully removed from the cart');

      return newState;
    }

    case types.CLEAR_CART: {
      const newState = { ...state };
      newState.cartProducts = action.payload.productsCart;

      toast.info('Cart has been successfully cleaned');
      return newState;
    }

    default:
      return state;
  }
};
