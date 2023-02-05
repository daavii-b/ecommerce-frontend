import { combineReducers } from 'redux';
import authReducer, { initialState } from './auth/reducer';
import globalReducer, { globalState } from './global/reducer';
import favoritesReducer, { favoritesInitialState } from './favorites/reducer';
import cartReducer, { cartInitialState } from './cart/reducer';

export const reducersDefaultState = {
  authReducer: initialState,
  globalReducer: globalState,
  favoritesReducer: favoritesInitialState,
  cartReducer: cartInitialState,
};

export default combineReducers({
  authReducer,
  globalReducer,
  favoritesReducer,
  cartReducer,
});
