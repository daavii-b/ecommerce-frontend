import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { AiOutlineClear } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import {
  FaRegHeart,
  FaHeart,
  FaCaretDown,
  FaPlus,
  FaMinus,
} from 'react-icons/fa';
// import { MdPayment } from 'react-icons/md';
// import { AiOutlineClear } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/cart';
import { FavoritesContext } from '../../context/favorites';
import { Section, ProductContainer, Article } from './styled';
import axios from '../../services/axios';
import * as globalActions from '../../store/modules/global/actions';

export default function Cart() {
  const dispatch = useDispatch();
  const {
    productsCart,
    setProductsCart,
    addProductCart,
    removeProductCart,
    clearCart,
  } = useContext(CartContext);
  const { toggleProductFav, checkProductIsFav } = useContext(FavoritesContext);

  useEffect(() => {
    async function listCartProducts() {
      try {
        dispatch(globalActions.startLoad());

        const response = await axios.get('cart/');

        if (response.status === 200) {
          const cartProds = response.data.cart;
          setProductsCart(cartProds);
        }

        dispatch(globalActions.finishLoad());
      } catch (err) {
        setProductsCart([]);
      }
    }

    listCartProducts();
  }, [dispatch, setProductsCart]);

  function getPercentageDiscount(price, promotionalPrice) {
    const descValue = price - promotionalPrice;

    return String(((descValue / price) * 100).toFixed(0)).concat('%');
  }

  function formatTextLength(text) {
    return text.length > 28 ? `${text.substring(0, 25)}...` : text;
  }

  function getFormatedPrice(price) {
    return `R$${price.toFixed(2)}`;
  }

  return (
    <Section className="cart-session">
      <section className="products-session">
        <header>
          <h2>Products List</h2>
        </header>

        <ul className="product-list">
          {productsCart.length > 0
            ? productsCart.map((item) => (
                <li key={item.id}>
                  <Article>
                    <ProductContainer>
                      <div className="product-cover">
                        <img
                          src={get(item.product, 'cover', '')}
                          alt={`Product Cover: ${item.product.name}`}
                        />
                        <abbr title="Quantity" className="stock">
                          {item.qty}
                        </abbr>
                      </div>
                      <header className="product-header">
                        <h3 translate="no">
                          {formatTextLength(item.product.name)}
                        </h3>
                      </header>
                      <footer className="product-footer">
                        {item.product.promotional_price ? (
                          <>
                            <span translate="no" className="price old">
                              {getFormatedPrice(item.product.price)}
                            </span>
                            <span translate="no" className="price promotional">
                              {getFormatedPrice(item.product.promotional_price)}
                            </span>
                          </>
                        ) : (
                          <span translate="no" className="price">
                            {getFormatedPrice(item.product.price)}
                          </span>
                        )}
                      </footer>
                      <div className="cart-controls">
                        <button
                          className="fav-button"
                          onClick={() => toggleProductFav(item.id)}
                          type="button"
                        >
                          {checkProductIsFav(item.id) ? (
                            <FaHeart size={11} className="remove" />
                          ) : (
                            <FaRegHeart size={11} className="add" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            addProductCart(item.id);
                            toast.info(
                              'Product has been successfully added to cart'
                            );
                          }}
                          type="button"
                        >
                          <FaPlus size={11} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            removeProductCart(item.id);
                            toast.info(
                              'Product has been successfully removed from the cart'
                            );
                          }}
                        >
                          <FaMinus size={11} />
                        </button>
                      </div>
                      {item.product.promotional_price ? (
                        <span className="per-des">
                          {getPercentageDiscount(
                            item.product.price,
                            item.product.promotional_price
                          )}
                          <span className="arrow-down">
                            <FaCaretDown size={12} />
                          </span>
                        </span>
                      ) : (
                        ''
                      )}
                    </ProductContainer>
                  </Article>
                </li>
              ))
            : ''}
        </ul>
      </section>

      <section className="products-details-session">
        <header className="details-header">
          <h2>Cart Details</h2>
        </header>
        <div className="details-content">
          <ul className="product-list-name">
            {productsCart.length
              ? productsCart.map((item) => (
                  <li key={item.id}>
                    <h3>{item.product.name}</h3>
                  </li>
                ))
              : ''}
          </ul>
        </div>
        <footer className="details-footer">
          <div className="cart-amount">Amount</div>
          <div className="cart-actions">
            <button className="ready-to-pay" type="button">
              <span>
                <MdPayment className="icon" size={13} />
              </span>
              Ready to pay
            </button>
            <button
              className="clear-cart"
              onClick={() => clearCart()}
              type="button"
            >
              <span>
                <AiOutlineClear className="icon" size={13} />
              </span>
              Clear cart
            </button>
          </div>
        </footer>
      </section>
    </Section>
  );
}
