import { combineReducers } from 'redux';
import authReducer, { initialState } from './auth/reducer';

export const defaultState = {
  authReducer: initialState,
};

export default combineReducers({
  authReducer,
});
