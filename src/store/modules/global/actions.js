import * as types from '../types';

export const dispatchAction = (action, payload) => ({
  type: types.DISPATCH_ACTION,
  action,
  payload,
});

export const startLoad = (payload) => ({
  type: types.START_LOAD,
  payload,
});
export const finishLoad = (payload) => ({
  type: types.FINISH_LOAD,
  payload,
});
