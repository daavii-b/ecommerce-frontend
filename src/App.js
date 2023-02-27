import React from 'react';

import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Main from './components/Main';
import Routers from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Routers />
      </Main>
      <ToastContainer
        className="toast-notification-style"
        toastClassName="toast-notification-style"
        autoClose={1500}
        limit={2}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
