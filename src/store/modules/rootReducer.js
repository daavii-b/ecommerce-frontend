import { combineReducers } from 'redux';
import authReducer, { initialState } from './auth/reducer';
import favoritesReducer, { favoritesInitialState } from './favorites/reducer';
import cartReducer, { cartInitialState } from './cart/reducer';

export const reducersDefaultState = {
  authReducer: initialState,
  favoritesReducer: favoritesInitialState,
  cartReducer: cartInitialState,
};

export default combineReducers({
  authReducer,
  favoritesReducer,
  cartReducer,
});
