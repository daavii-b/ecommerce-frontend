import { toast } from 'react-toastify';
import * as types from '../types';
import history from '../../../services/history';

export const initialState = {
  isAuthenticated: false,
  token: '',
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };

      newState.isAuthenticated = true;
      newState.token = action.payload.access;
      newState.user = action.payload.user;

      toast.success('You have successfully logged in');

      history.push(action.payload.from);

      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };

      const { errors, status } = action.payload;

      switch (status) {
        case 400: {
          errors.forEach((err) => {
            Object.keys(err).map((key) =>
              toast.error(`${key.toUpperCase()}: ${err[key]}`)
            );
          });

          return newState;
        }

        case 401: {
          toast.error('E-mail or password is incorrect');

          return newState;
        }

        default:
          return newState;
      }
    }
    case types.UPDATE_SUCCESS: {
      const newState = { ...state };

      newState.isAuthenticated = true;
      newState.token = action.payload.oldToken;
      newState.user = action.payload.user;

      toast.success('Your data has been updated successfully.');

      return newState;
    }

    case types.UPDATE_FAILURE: {
      const newState = { ...initialState };

      const { errors, status } = action.payload;

      switch (status) {
        case 400: {
          errors.forEach((err) => {
            Object.keys(err).map((key) =>
              toast.error(`${key.toUpperCase()}: ${err[key]}`)
            );
          });

          return newState;
        }

        case 401: {
          toast.error('E-mail or password is incorrect');

          return newState;
        }

        default:
          return newState;
      }
    }

    case types.LOGOUT_SUCCESS: {
      const newState = { ...initialState };

      toast.info('Your session has been logged out');

      history.push('/login');

      return newState;
    }

    default:
      return state;
  }
};
