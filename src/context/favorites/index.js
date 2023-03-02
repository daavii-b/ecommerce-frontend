import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const FavoritesContext = createContext();

export function useFav() {
  return useContext(FavoritesContext);
}
export default function FavoritesProvider({ children }) {
  const [productsFav, setProductsFav] = useState([]);

  const toggleProductFav = useMemo(
    () => (productId) => {
      let copyFavProducts = [...productsFav];

      const product = copyFavProducts.find(
        (favProduct) => favProduct === productId
      );
      if (!product) {
        copyFavProducts.push(productId);
      } else {
        copyFavProducts = copyFavProducts.filter(
          (favProduct) => favProduct !== productId
        );
      }
      setProductsFav(copyFavProducts);
    },
    [productsFav]
  );

  const checkProductIsFav = useMemo(
    () => (productId) => {
      const copyFavProducts = [...productsFav];

      const product = copyFavProducts.find(
        (favProduct) => favProduct === productId
      );

      if (product) return true;

      return false;
    },
    [productsFav]
  );

  const clearFav = useMemo(
    () => () => {
      setProductsFav([]);
    },
    []
  );

  const contextObj = useMemo(
    () => ({
      productsFav,
      toggleProductFav,
      clearFav,
      setProductsFav,
      checkProductIsFav,
    }),
    [toggleProductFav, clearFav, checkProductIsFav, productsFav]
  );

  return (
    <FavoritesContext.Provider value={contextObj}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
