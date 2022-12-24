import { combineReducers } from 'redux';
import authReducer, { initialState } from './auth/reducer';
import globalReducer, { globalState } from './global/reducer';

export const reducersDefaultState = {
  authReducer: initialState,
  globalReducer: globalState,
};

export default combineReducers({
  authReducer,
  globalReducer,
});
