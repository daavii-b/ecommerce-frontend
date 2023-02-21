import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import * as types from '../types';
import * as actions from './actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  const from = payload.from || '/';

  try {
    const response = yield call(axios.post, 'tokens/', payload.user);

    axios.defaults.headers.Authorization = `Bearer ${response.data.access}`;

    const user = yield call(axios.get, 'users/');

    yield put(
      actions.loginSuccess({
        ...response.data,
        user: user.data,
        from,
      })
    );
  } catch (error) {
    yield put(
      actions.loginFailure({
        errors: [get(error, 'response.data')],
        status: get(error, 'response.status'),
      })
    );
  }
}

function* updateRequest({ payload }) {
  try {
    const response = yield call(axios.patch, 'users/', payload.user);

    yield put(
      actions.updateSuccess({
        user: { ...response.data },
        oldToken: payload.oldToken,
      })
    );
  } catch (error) {
    yield put(
      actions.updateFailure({
        errors: [get(error, 'response.data')],
        status: get(error, 'response.status'),
      })
    );
  }
}

function* logoutRequest({ payload }) {
  axios.defaults.headers.Authorization = '';

  yield put(actions.logoutSuccess({ ...payload }));
}

function persistRehydrated({ payload }) {
  const token = get(payload, 'authReducer.token', '');

  if (token) axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.UPDATE_REQUEST, updateRequest),
  takeLatest(types.LOGOUT_REQUEST, logoutRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrated),
]);
