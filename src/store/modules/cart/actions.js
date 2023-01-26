import * as types from '../types';

export function addProductCart(payload) {
  return {
    type: types.ADD_PRODUCT_CART,
    payload,
  };
}
export function removeProductCart(payload) {
  return {
    type: types.REMOVE_PRODUCT_CART,
    payload,
  };
}
export function clearCart() {
  return {
    type: types.CLEAR_CART,
  };
}
