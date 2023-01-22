import React from 'react';
import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import Router from './routes/CustomRouter';

import GlobalStyles from './styles/GlobalStyles';
import history from './services/history';
import Header from './components/Header';
import Main from './components/Main';
import Routers from './routes';
import Loading from './components/Loading';
import CartProvider from './context/Cart';

function App() {
  const { isLoading } = useSelector((state) => state.globalReducer);
  return (
    <>
      <Loading isLoading={isLoading} />
      <Router history={history}>
        <Header />
        <Main>
          <CartProvider>
            <Routers />
          </CartProvider>
        </Main>
        <GlobalStyles />
        <ToastContainer
          className="toast-notification-style"
          toastClassName="toast-notification-style"
          autoClose={1500}
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
      </Router>
    </>
  );
}

export default App;
