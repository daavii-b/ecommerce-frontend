import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyles, { MainContainer } from './styles/GlobalStyles';

import history from './services/history';
import Header from './components/Header';
import Main from './components/Main';
import Routers from './routes';

import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <MainContainer>
            <Header />
            <Main element={<Routers />} />
            <GlobalStyles />
            <ToastContainer
              className="toast-notification-style"
              toastClassName="toast-notification-style"
              autoClose={3000}
              limit={5}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover
              theme="dark"
            />
          </MainContainer>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
