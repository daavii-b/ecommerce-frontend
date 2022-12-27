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
      const from = action.payload.from || '/';

      newState.isAuthenticated = true;
      newState.token = action.payload.access;
      newState.user = action.payload.user;

      toast.success('You have successfully logged in');

      history.push(from, newState);
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };

      const { errors, status } = action.payload;

      if (status === 400) {
        errors.forEach((err) => {
          Object.keys(err).map((key) =>
            toast.error(`${key.toUpperCase()}: ${err[key]}`)
          );
        });
      }

      return newState;
    }

    case types.LOGOUT_SUCCESS: {
      const newState = { ...initialState };

      history.push('/login');

      toast.info('Your session has been logged out');

      return newState;
    }

    case types.LOGOUT_FAILURE: {
      const newState = { ...initialState };

      history.push('/login', newState);

      toast.warning('An error occurred and you was logged out.');
      toast.info('Please, make login again');

      return newState;
    }

    default:
      return state;
  }
};
