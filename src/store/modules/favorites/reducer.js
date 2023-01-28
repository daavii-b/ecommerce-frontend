import * as types from '../types';

export const favoritesInitialState = {
  favorites: [],
};

export default (state = favoritesInitialState, action) => {
  switch (action.type) {
    case types.UPDATE_FAVORITES: {
      const newState = { ...state };

      newState.favorites = [...action.payload.favorites];

      return newState;
    }

    default:
      return state;
  }
};
