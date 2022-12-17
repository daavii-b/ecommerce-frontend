/* eslint-disable no-console */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { redirect } from 'react-router-dom';

import * as types from '../types';
import axios from '../../../services/axios';
import * as actions from './actions';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, 'tokens/', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('You have successfully logged in');
    axios.defaults.headers.Authorization = `Bearer ${response.data.access}`;

    yield redirect('/');
  } catch (error) {
    const status = get(error, 'response.status');
    const errors = [get(error, 'response.data')];

    if (status === 400) {
      errors.forEach((err) => {
        Object.keys(err).map((key) =>
          toast.error(`${key.toUpperCase()}: ${err[key]}`)
        );
      });
    }
    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
