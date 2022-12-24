import * as types from '../types';

export const globalState = {
  isLoading: false,
};

export default (state = globalState, action) => {
  switch (action.type) {
    case types.START_LOAD: {
      const newState = { ...state };

      newState.isLoading = true;

      return newState;
    }
    case types.FINISH_LOAD: {
      const newState = { ...state };

      newState.isLoading = false;

      return newState;
    }

    default:
      return state;
  }
};
