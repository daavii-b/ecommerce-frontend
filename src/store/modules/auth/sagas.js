/* eslint-disable no-console */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import * as types from '../types';
import * as actions from './actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, 'tokens/', payload);
    yield put(actions.loginSuccess({ ...response.data, from: payload.from }));
    axios.defaults.headers.Authorization = `Bearer ${response.data.access}`;
  } catch (error) {
    yield put(
      actions.loginFailure({
        errors: [get(error, 'response.data')],
        status: get(error, 'response.status'),
      })
    );
  }
}

function* logoutRequest({ payload }) {
  const { status, userLogout } = get(payload, 'response', {
    status: null,
    userLogout: true,
  });

  if (status === 401 || userLogout) {
    yield put(actions.logoutSuccess(payload));
  } else {
    yield put(actions.logoutFailure(payload));
  }
}

function persistRehydrated({ payload }) {
  const token = get(payload, 'authReducer.token', false);

  if (token) axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.LOGOUT_REQUEST, logoutRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrated),
]);
