import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import CartProvider from './context/cart';
import AuthProvider from './context/auth';
import FavoritesProvider from './context/favorites';
import store, { persistor } from './store';
import Router from './routes/CustomRouter';
import history from './services/history';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <AuthProvider>
          <CartProvider>
            <FavoritesProvider>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
            </FavoritesProvider>
          </CartProvider>
        </AuthProvider>
      </Router>
    </PersistGate>
  </Provider>
  // </StrictMode>
);
