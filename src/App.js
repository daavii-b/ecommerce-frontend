import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import Router from './routes/CustomRouter';
import GlobalStyles from './styles/GlobalStyles';
import history from './services/history';
import Header from './components/Header';
import Main from './components/Main';
import Routers from './routes';
import Loading from './components/Loading';
import { CartContext } from './context/cart';
import { FavoritesContext } from './context/favorites';
import * as cartActions from './store/modules/cart/actions';
import * as favoritesActions from './store/modules/favorites/actions';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.globalReducer);
  const { productsCart, setProductsCart } = useContext(CartContext);
  const { productsFav, setProductsFav } = useContext(FavoritesContext);
  const { cart } = useSelector((state) => state.cartReducer);
  const { favorites } = useSelector((state) => state.favoritesReducer);

  useEffect(() => {
    if (cart.length > 0) setProductsCart([...cart]);
    if (favorites.length > 0) setProductsFav([...favorites]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(cartActions.updateCart({ cart: productsCart }));
  }, [dispatch, productsCart]);

  useEffect(() => {
    dispatch(favoritesActions.updateFavorites({ favorites: productsFav }));
  }, [dispatch, productsFav]);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Router history={history}>
        <Header />
        <Main>
          <Routers />
        </Main>
        <GlobalStyles />
        <ToastContainer
          className="toast-notification-style"
          toastClassName="toast-notification-style"
          autoClose={1500}
          limit={3}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </>
  );
}

export default App;
