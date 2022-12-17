/* eslint-disable no-console */
import * as types from '../types';

export const initialState = {
  isAuthenticated: false,
  token: '',
  user: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  // const navigate = useNavigate();

  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };

      newState.isAuthenticated = true;
      newState.token = action.payload.access;
      newState.user = action.payload.user;

      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default:
      return state;
  }
};
