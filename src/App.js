import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Router from './routes/CustomRouter';

import GlobalStyles, { MainContainer } from './styles/GlobalStyles';

import history from './services/history';
import Header from './components/Header';
import Main from './components/Main';
import Routers from './routes';
import Loading from './components/Loading';

function App() {
  const { isLoading } = useSelector((state) => state.globalReducer);
  return (
    <Router history={history}>
      <MainContainer>
        <Loading isLoading={isLoading} />
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
  );
}

export default App;
