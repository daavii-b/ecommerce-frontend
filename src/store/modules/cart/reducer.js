import { toast } from 'react-toastify';
import * as types from '../types';
import { manageToastNotification } from '../../../utils/toast';

export const cartInitialState = {
  cartProducts: [],
  cartAmount: 0,
};

export default (state = cartInitialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_CART: {
      const newState = { ...state };
      newState.cartProducts = action.payload.productsCart;

      manageToastNotification('add-cart', toast.TYPE.INFO);

      toast.info('Product has been successfully added to cart', {
        toastId: 'add-cart',
      });
      return newState;
    }

    case types.REMOVE_PRODUCT_CART: {
      const newState = { ...state };
      newState.cartProducts = action.payload.productsCart;

      manageToastNotification('remove-cart', toast.TYPE.INFO);

      toast.info('Product has been successfully removed from the cart', {
        toastId: 'remove-cart',
      });

      return newState;
    }

    case types.CLEAR_CART: {
      const newState = { ...state };
      newState.cartProducts = action.payload.productsCart;

      manageToastNotification('clear-cart', toast.TYPE.INFO);

      toast.info('Cart has been successfully cleaned', {
        toastId: 'clear-cart',
      });
      return newState;
    }

    case types.SET_AMOUNT: {
      const newState = { ...state };

      newState.cartAmount = action.payload.amount;

      return newState;
    }

    default:
      return state;
  }
};
