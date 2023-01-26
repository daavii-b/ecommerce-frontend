import { put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as types from '../types';
import * as actions from './actions';

function* dispatchAction({ action, payload }) {
  try {
    yield put(actions.startLoad());
    yield put(action(payload));
  } catch (err) {
    toast.error('An Internal error occurred, try again later');
  } finally {
    yield put(actions.finishLoad());
  }
}

export default all([takeLatest(types.DISPATCH_ACTION, dispatchAction)]);
