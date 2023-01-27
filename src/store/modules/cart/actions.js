import * as types from '../types';

export function updateCart(payload) {
  return {
    type: types.UPDATE_CART,
    payload,
  };
}
