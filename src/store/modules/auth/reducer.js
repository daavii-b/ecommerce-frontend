/* eslint-disable no-console */
// import { get } from 'lodash';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import * as types from '../types';
// import axios from '../../../services/axios';

export const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  // const navigate = useNavigate();

  switch (action.type) {
    case types.LOGIN_REQUEST: {
      try {
        console.log(action.payload);
        // axios.post('/tokens');
      } catch (error) {
        // const status = get(error, 'response.status');
        // const errors = [get(error, 'response.data')];
        // if (status === 400) {
        //   errors.forEach((err) => {
        //     Object.keys(err).map((key) =>
        //       toast.error(`${key.toUpperCase()}: ${err[key]}`)
        //     );
        //   });
        // }
      }

      return state;
    }

    default:
      return state;
  }
};
