import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../store/modules/cart/actions';
import { addAmount, removeAmount, clearAmount } from '../../utils/cart';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const dispatch = useDispatch();
  const [productsCart, setProductsCart] = useState([]);

  const addProductCart = useMemo(
    () => (productId, cProduct) => {
      const copyProductsCart = [...productsCart];
      const product = copyProductsCart.find(
        (cartProduct) => cartProduct.id === productId
      );
      if (!product) {
        const newProduct = {
          id: productId,
          product: cProduct,
          qty: 1,
        };
        copyProductsCart.push(newProduct);
        addAmount(cProduct);
      } else {
        product.qty += 1;
        addAmount(product.product);
      }
      setProductsCart(copyProductsCart);
      dispatch(cartActions.processAddProduct({ products: copyProductsCart }));
    },
    [dispatch, productsCart]
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

        removeAmount(product.product);

        dispatch(
          cartActions.processRemoveProduct({ products: copyProductsCart })
        );
      } else {
        const cartProductsFiltered = copyProductsCart.filter(
          (cProduct) => cProduct.id !== productId
        );

        setProductsCart(cartProductsFiltered);

        removeAmount(product.product);

        dispatch(
          cartActions.processRemoveProduct({
            products: cartProductsFiltered,
          })
        );
      }
    },
    [dispatch, productsCart]
  );

  const clearCart = useMemo(
    () => () => {
      setProductsCart([]);
      clearAmount();

      dispatch(cartActions.processClearCart({ products: [] }));
    },
    [dispatch]
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
