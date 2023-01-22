import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);
  const addProductCart = useMemo(
    () => (productId) => {
      const copyProductsCart = [...productsCart];
      const product = copyProductsCart.find(
        (cartProduct) => cartProduct.id === productId
      );
      if (!product) {
        copyProductsCart.push({
          id: productId,
          qty: 1,
        });
      } else {
        product.qty += 1;
      }

      setProductsCart(copyProductsCart);
    },
    [productsCart]
  );

  const removeProductCart = useMemo(
    () => (productId) => {
      const copyProductsCart = [...productsCart];

      const product = copyProductsCart.find(
        (cartProduct) => cartProduct.id === productId
      );

      if (product && product.qty > 1) {
        product.qty -= 1;
        setProductsCart(copyProductsCart);
      } else {
        const cartProductsFiltered = copyProductsCart.filter(
          (cartProduct) => cartProduct.id !== productId
        );
        setProductsCart(cartProductsFiltered);
      }
    },
    [productsCart]
  );

  const clearCart = useMemo(() => () => setProductsCart([]), []);

  const contextObj = useMemo(
    () => ({
      productsCart,
      addProductCart,
      removeProductCart,
      clearCart,
    }),
    [addProductCart, clearCart, productsCart, removeProductCart]
  );

  return (
    <CartContext.Provider value={contextObj}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
