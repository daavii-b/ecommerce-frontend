import * as types from '../types';

export function updateFavorites(payload) {
  return {
    type: types.UPDATE_FAVORITES,
    payload,
  };
}
