import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}
export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function logoutRequest(payload) {
  return {
    type: types.LOGOUT_REQUEST,
    payload,
  };
}

export function logoutSuccess(payload) {
  return {
    type: types.LOGOUT_SUCCESS,
    payload,
  };
}
