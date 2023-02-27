import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/modules/cart/actions';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const { cartProducts } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [productsCart, setProductsCart] = useState([...cartProducts]);
  const [amount, setAmount] = useState(0);

  const addAmount = useMemo(
    () =>
      ({ price, promotional_price: promotionalPrice }) => {
        if (promotionalPrice) {
          setAmount((currentAmount) => currentAmount + promotionalPrice);
        } else {
          setAmount((currentAmount) => currentAmount + price);
        }
      },
    []
  );

  const removeAmount = useMemo(
    () =>
      ({ price, promotional_price: promotionalPrice }) => {
        if (promotionalPrice) {
          setAmount((currentAmount) => currentAmount - promotionalPrice);
        } else {
          setAmount((currentAmount) => currentAmount - price);
        }
      },
    []
  );

  const clearAmount = useMemo(
    () => () => {
      setAmount(0);
    },
    []
  );

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
    [addAmount, dispatch, productsCart]
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
    [dispatch, productsCart, removeAmount]
  );

  const clearCart = useMemo(
    () => () => {
      setProductsCart([]);
      clearAmount();

      dispatch(cartActions.processClearCart({ products: [] }));
    },
    [clearAmount, dispatch]
  );

  const getPercentageDiscount = (price, promotionalPrice) => {
    const descValue = price - promotionalPrice;

    return String(((descValue / price) * 100).toFixed(0)).concat('%');
  };

  const formatTextLength = (text) =>
    text.length > 28 ? `${text.substring(0, 25)}...` : text;

  const getFormatedPrice = (price) =>
    'R$'.concat(
      new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price)
    );

  const contextObj = useMemo(
    () => ({
      productsCart,
      addProductCart,
      removeProductCart,
      clearCart,
      setProductsCart,
      amount,
      getPercentageDiscount,
      formatTextLength,
      getFormatedPrice,
    }),
    [productsCart, addProductCart, removeProductCart, clearCart, amount]
  );

  return (
    <CartContext.Provider value={contextObj}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
