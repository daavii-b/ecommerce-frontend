import React, { createContext, useState, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/modules/cart/actions';

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }) {
  const dispatch = useDispatch();
  const { cartProducts, cartAmount } = useSelector(
    (state) => state.cartReducer
  );
  const [productsCart, setProductsCart] = useState([...cartProducts]);
  const [amount, setAmount] = useState(cartAmount);

  const addAmount = useMemo(
    () =>
      ({ price, promotional_price: promotionalPrice }) => {
        setAmount((currentAmount) => {
          dispatch(
            cartActions.setAmount({
              amount: currentAmount + (promotionalPrice || price),
            })
          );

          return currentAmount + (promotionalPrice || price);
        });
      },
    [dispatch]
  );

  const removeAmount = useMemo(
    () =>
      ({ price, promotional_price: promotionalPrice }) => {
        setAmount((currentAmount) => {
          dispatch(
            cartActions.setAmount({
              amount: currentAmount - (promotionalPrice || price),
            })
          );

          return currentAmount - (promotionalPrice || price);
        });
      },
    [dispatch]
  );

  const clearAmount = useMemo(
    () => () => {
      setAmount(0);
      dispatch(
        cartActions.setAmount({
          amount: 0,
        })
      );
    },
    [dispatch]
  );

  const calculateAmount = useMemo(
    () => (products) =>
      products.reduce(
        (accumulator, item) =>
          accumulator +
          (item.product.promotional_price || item.product.price) * item.qty,
        0
      ),
    []
  );

  const addProductCart = useMemo(
    () => (productId, cProduct) => {
      setProductsCart((currentCart) => {
        const item = currentCart.find(
          (cartProduct) => cartProduct.id === productId
        );

        if (!item) {
          const newProduct = {
            id: productId,
            product: cProduct,
            qty: 1,
          };

          addAmount(cProduct);

          const updatedCart = [...currentCart, newProduct];

          dispatch(
            cartActions.processAddProduct({
              products: updatedCart,
              amount,
            })
          );

          return updatedCart;
        }

        item.qty += 1;

        addAmount(item.product);

        dispatch(
          cartActions.processAddProduct({
            products: [...currentCart],
            amount,
          })
        );

        return [...currentCart];
      });
    },
    [addAmount, amount, dispatch]
  );

  const removeProductCart = useMemo(
    () => (productId) => {
      setProductsCart((currentCart) => {
        const item = currentCart.find((cProduct) => cProduct.id === productId);

        if (item && item.qty > 1) {
          item.qty -= 1;

          removeAmount(item.product);

          dispatch(
            cartActions.processRemoveProduct({
              products: [...currentCart],
              amount,
            })
          );

          return [...currentCart];
        }
        const filteredCart = [
          ...currentCart.filter((cProduct) => cProduct.id !== productId),
        ];

        removeAmount(item.product);

        dispatch(
          cartActions.processRemoveProduct({
            products: filteredCart,
            amount,
          })
        );

        return filteredCart;
      });
    },
    [amount, dispatch, removeAmount]
  );

  const clearCart = useMemo(
    () => () => {
      setProductsCart(() => {
        clearAmount();

        dispatch(cartActions.processClearCart({ products: [], amount: 0 }));

        return [];
      });
    },
    [clearAmount, dispatch]
  );

  const setCart = useMemo(
    () => (cartItemsNotAvailable) => {
      setProductsCart((currentCart) => {
        const newCart = [
          ...currentCart.filter(
            (item) =>
              !cartItemsNotAvailable.some((product) => product.id === item.id)
          ),
        ];

        dispatch(cartActions.setCart({ productsCart: newCart }));

        const newAmount = calculateAmount(newCart);

        setAmount(() => {
          dispatch(
            cartActions.setAmount({
              amount: newAmount,
            })
          );

          return newAmount;
        });

        return newCart;
      });
    },
    [calculateAmount, dispatch]
  );

  const getPercentageDiscount = ({
    price,
    promotional_price: promotionalPrice,
  }) => {
    const descValue = price - promotionalPrice;

    return String(((descValue / price) * 100).toFixed(0)).concat('%');
  };

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
      getFormatedPrice,
      calculateAmount,
      setCart,
    }),
    [
      productsCart,
      addProductCart,
      removeProductCart,
      clearCart,
      calculateAmount,
      amount,
      setCart,
    ]
  );

  return (
    <CartContext.Provider value={contextObj}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
