import { toast } from 'react-toastify';
import * as types from '../types';
import history from '../../../services/history';
import { manageToastNotification } from '../../../utils/toast';

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

      manageToastNotification('login-user-success', toast.TYPE.SUCCESS);

      toast.success('You have successfully logged in', {
        toastId: 'login-user-success',
      });

      history.push(action.payload.from);

      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };

      manageToastNotification('login-user-failure', toast.TYPE.ERROR);

      toast.error('E-mail or password is incorrect');

      return newState;
    }

    case types.UPDATE_SUCCESS: {
      const newState = { ...state };

      newState.isAuthenticated = true;
      newState.accessToken = action.payload.accessToken;
      newState.refreshToken = action.payload.refreshToken;
      newState.user = action.payload.user;

      manageToastNotification('update-user-success', toast.TYPE.SUCCESS);

      toast.success('Your data has been updated successfully.', {
        toastId: 'update-user-success',
      });

      return newState;
    }

    case types.UPDATE_FAILURE: {
      const newState = { ...initialState };

      manageToastNotification('update-user-failure', toast.TYPE.ERROR);

      toast.error(
        'An error occurred while updating your data. Please, try again later.',
        {
          toastId: 'update-user-failure',
        }
      );

      return newState;
    }

    case types.LOGOUT_USER: {
      const newState = { ...initialState };

      manageToastNotification('logout-success', toast.TYPE.SUCCESS);

      toast.info('Your session has been logged out', {
        toastId: 'logout-success',
      });

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
