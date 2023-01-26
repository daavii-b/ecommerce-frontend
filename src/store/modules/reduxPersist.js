import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';

export default (reducers) => {
  const persistor = persistReducer(
    {
      key: 'ecommerce',
      storage: sessionStorage,
      whitelist: ['authReducer', 'globalReducer', 'cartReducer'],
    },
    reducers
  );

  return persistor;
};
