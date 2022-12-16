import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistor = persistReducer(
    {
      key: 'ecommerce',
      storage,
      whitelist: ['authReducer'],
    },
    reducers
  );

  return persistor;
};
