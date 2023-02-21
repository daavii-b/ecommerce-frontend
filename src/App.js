import React, { useLayoutEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Main from './components/Main';
import Routers from './routes';
import Loading from './components/Loading';
import { FavoritesContext } from './context/favorites';
import * as favoritesActions from './store/modules/favorites/actions';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.globalReducer);
  const { favorites } = useSelector((state) => state.favoritesReducer);
  const { productsFav, setProductsFav } = useContext(FavoritesContext);

  useLayoutEffect(() => {
    if (favorites.length > 0) setProductsFav([...favorites]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    dispatch(favoritesActions.updateFavorites({ favorites: productsFav }));
  }, [dispatch, productsFav]);

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
      <Loading isLoading={isLoading} />
    </>
  );
}

export default App;
