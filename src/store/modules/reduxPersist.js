import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

export default (reducers) => {
  const persistor = persistReducer(
    {
      key: 'ecommerce',
      storage,
      whitelist: [
        'authReducer',
        'globalReducer',
        'cartReducer',
        'favoritesReducer',
      ],
    },
    reducers
  );

  return persistor;
};
