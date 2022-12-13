import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles, { Container } from './styles/GlobalStyles';

import history from './services/history';
import Header from './components/Header';
import Main from './components/Main';
import Routers from './routes';

function App() {
  return (
    <Router history={history}>
      <Container>
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
      </Container>
    </Router>
  );
}

export default App;
