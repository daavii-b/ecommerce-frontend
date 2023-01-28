import { combineReducers } from 'redux';
import authReducer, { initialState } from './auth/reducer';
import globalReducer, { globalState } from './global/reducer';
import cartReducer, { cartInitialState } from './cart/reducer';
import favoritesReducer, { favoritesInitialState } from './favorites/reducer';

export const reducersDefaultState = {
  authReducer: initialState,
  globalReducer: globalState,
  cartReducer: cartInitialState,
  favoritesReducer: favoritesInitialState,
};

export default combineReducers({
  authReducer,
  globalReducer,
  cartReducer,
  favoritesReducer,
});
