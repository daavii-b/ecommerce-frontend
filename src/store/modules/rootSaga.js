import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import cartSaga from './cart/sagas';

export default function* rootSaga() {
  return yield all([authSaga, cartSaga]);
}
