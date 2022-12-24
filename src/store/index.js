import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer, { reducersDefaultState } from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistedReducers from './modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducers(rootReducer),
  preloadedState: reducersDefaultState,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
