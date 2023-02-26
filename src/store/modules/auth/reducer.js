import { toast } from 'react-toastify';
import * as types from '../types';
import history from '../../../services/history';

export const initialState = {
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };

      newState.isAuthenticated = true;
      newState.accessToken = action.payload.access;
      newState.refreshToken = action.payload.refresh;
      newState.user = action.payload.user;

      toast.success('You have successfully logged in');

      history.push(action.payload.from);

      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };

      toast.error('E-mail or password is incorrect');

      return newState;
    }

    case types.UPDATE_SUCCESS: {
      const newState = { ...state };

      newState.isAuthenticated = true;
      newState.accessToken = action.payload.accessToken;
      newState.refreshToken = action.payload.refreshToken;
      newState.user = action.payload.user;

      toast.success('Your data has been updated successfully.');

      return newState;
    }

    case types.UPDATE_FAILURE: {
      const newState = { ...initialState };

      toast.error(
        'An error occurred while updating your data. Please, try again later.'
      );

      return newState;
    }

    case types.LOGOUT_SUCCESS: {
      const newState = { ...initialState };

      toast.info('Your session has been logged out');

      history.push('/login');

      return newState;
    }

    case types.REFRESH_USER_TOKEN: {
      const newState = { ...initialState };

      newState.isAuthenticated = true;
      newState.accessToken = action.payload.accessToken;
      newState.refreshToken = action.payload.refreshToken;
      newState.user = action.payload.user;

      return newState;
    }

    default:
      return state;
  }
};
