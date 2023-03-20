import { combineReducers } from 'redux';
import authReducer, { initialState } from './auth/reducer';
import favoritesReducer, { favoritesInitialState } from './favorites/reducer';
import cartReducer, { cartInitialState } from './cart/reducer';
import filtersReducer, { filtersInitialState } from './filters/reducer';

export const reducersDefaultState = {
  authReducer: initialState,
  favoritesReducer: favoritesInitialState,
  cartReducer: cartInitialState,
  filtersReducer: filtersInitialState,
};

export default combineReducers({
  authReducer,
  favoritesReducer,
  cartReducer,
  filtersReducer,
});
