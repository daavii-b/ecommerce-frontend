import * as types from '../types';

export function addProductInCart(payload) {
  return {
    type: types.ADD_PRODUCT_CART,
    payload,
  };
}
export function removeProductInCart(payload) {
  return {
    type: types.REMOVE_PRODUCT_CART,
    payload,
  };
}
export function clearCart(payload) {
  return {
    type: types.CLEAR_CART,
    payload,
  };
}
export function processAddProduct(payload) {
  return {
    type: types.PROCESS_ADD_PRODUCT,
    payload,
  };
}
export function processRemoveProduct(payload) {
  return {
    type: types.PROCESS_REMOVE_PRODUCT,
    payload,
  };
}
export function processClearCart(payload) {
  return {
    type: types.PROCESS_CLEAR_CART,
    payload,
  };
}

export function setAmount(payload) {
  return {
    type: types.SET_AMOUNT,
    payload,
  };
}
