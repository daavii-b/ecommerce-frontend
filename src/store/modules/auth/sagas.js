/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../types';

function loginRequest({ payload }) {
  console.log(payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
