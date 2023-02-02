import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from '../../services/axios';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  const addProductCart = useMemo(
    () => (productId, cProduct) => {
      const copyProductsCart = [...productsCart];
      const product = copyProductsCart.find(
        (cartProduct) => cartProduct.id === productId
      );
      if (!product) {
        copyProductsCart.push({
          id: productId,
          product: cProduct,
          qty: 1,
        });
      } else {
        product.qty += 1;
      }

      setProductsCart(copyProductsCart);

      axios.post('cart/', {
        productsCart: [...copyProductsCart],
      });
    },
    [productsCart]
  );

  const removeProductCart = useMemo(
    () => (productId) => {
      const copyProductsCart = [...productsCart];

      const product = copyProductsCart.find(
        (cProduct) => cProduct.id === productId
      );

      if (product && product.qty > 1) {
        product.qty -= 1;

        setProductsCart(copyProductsCart);

        axios.post('cart/', {
          productsCart: [...copyProductsCart],
        });
      } else {
        const cartProductsFiltered = copyProductsCart.filter(
          (cProduct) => cProduct.id !== productId
        );

        setProductsCart(cartProductsFiltered);

        axios.post('cart/', {
          productsCart: [...cartProductsFiltered],
        });
      }
    },
    [productsCart]
  );

  const clearCart = useMemo(
    () => () => {
      setProductsCart([]);

      axios.post('cart/', {
        productsCart: [],
      });
    },
    []
  );

  const contextObj = useMemo(
    () => ({
      productsCart,
      addProductCart,
      removeProductCart,
      clearCart,
      setProductsCart,
    }),
    [productsCart, addProductCart, removeProductCart, clearCart]
  );

  return (
    <CartContext.Provider value={contextObj}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
