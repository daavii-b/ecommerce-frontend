import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';

export default function* rootSaga() {
  return yield all([authSaga]);
}
