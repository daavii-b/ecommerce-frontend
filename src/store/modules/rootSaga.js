import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import globalSaga from './global/sagas';

export default function* rootSaga() {
  return yield all([authSaga, globalSaga]);
}
