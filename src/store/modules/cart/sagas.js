import { put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import * as actions from './actions';

function* processAddProduct({ payload }) {
  // yield call(axios.post, 'cart/', {
  //   productsCart: payload.products,
  //   cartAmount,
  // });
  yield put(
    actions.addProductInCart({
      productsCart: payload.products,
    })
  );
}

function* processRemoveProduct({ payload }) {
  // yield call(axios.post, 'cart/', {
  //   productsCart: payload.products,
  //   cartAmount,
  // });
  yield put(
    actions.removeProductInCart({
      productsCart: payload.products,
    })
  );
}

function* processClearCart({ payload }) {
  // yield call(axios.post, 'cart/', {
  //   productsCart: payload.products,
  //   cartAmount,
  // });
  yield put(
    actions.clearCart({
      productsCart: payload.products,
    })
  );
}

export default all([
  takeLatest(types.PROCESS_ADD_PRODUCT, processAddProduct),
  takeLatest(types.PROCESS_REMOVE_PRODUCT, processRemoveProduct),
  takeLatest(types.PROCESS_CLEAR_CART, processClearCart),
]);
