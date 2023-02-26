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
  FaAngleDoubleRight,
} from 'react-icons/fa';
import { CartContext } from '../../context/cart';
import { FavoritesContext } from '../../context/favorites';
import { Section, ProductContainer, Article } from './styled';
import axios from '../../services/axios';
import * as globalActions from '../../store/modules/global/actions';
import setAmount, { cartAmount } from '../../utils/cart';
import {
  getPercentageDiscount,
  formatTextLength,
  getFormatedPrice,
} from '../../utils';

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
          const { products_cart: cartProds, cart_amount: amount } =
            response.data;
          setProductsCart(cartProds);
          setAmount(amount);
        }

        dispatch(globalActions.finishLoad());
      } catch (err) {
        setProductsCart([]);
      }
    }

    listCartProducts();
  }, [dispatch, setProductsCart]);

  return (
    <Section className="cart-session">
      <section className="products-session">
        <header>
          <h2>Products List</h2>
        </header>

        <ul className="product-list">
          {productsCart ? (
            productsCart.map((item) => (
              <li key={item.id}>
                <Article>
                  <ProductContainer>
                    <div className="product-cover">
                      <a target="_self" href={`/product/${item.product.slug}`}>
                        <img
                          src={get(item.product, 'cover', '')}
                          alt={`Product Cover: ${item.product.name}`}
                        />
                      </a>
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
                        }}
                        type="button"
                      >
                        <FaPlus size={11} />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          removeProductCart(item.id);
                        }}
                      >
                        <FaMinus size={11} />
                      </button>
                    </div>
                    {item.product.promotional_price ? (
                      <div className="per-des">
                        <p>
                          {getPercentageDiscount(
                            item.product.price,
                            item.product.promotional_price
                          )}
                        </p>
                        <span className="arrow-down">
                          <FaCaretDown size={12} />
                        </span>
                      </div>
                    ) : (
                      ''
                    )}
                  </ProductContainer>
                </Article>
              </li>
            ))
          ) : (
            <li>
              <div className="empty-cart">
                <h3>Your cart is Empty</h3>
                <p>It is time to go shopping</p>
                <p className="go-to-shopping">
                  <a target="_self" href="/">
                    let&apos;s go
                    <span>
                      <FaAngleDoubleRight className="icon" size={16} />
                    </span>
                  </a>
                </p>
              </div>
            </li>
          )}
        </ul>
      </section>

      <section className="products-details-session">
        <header className="details-header">
          <h2>Cart Details</h2>
        </header>
        <div className="details-content">
          <ul className="product-list-name">
            {productsCart
              ? productsCart.map((item) => (
                  <li key={item.id}>
                    <a href={`/product/${item.product.slug}`}>
                      <h3>{item.product.name}</h3>
                    </a>
                  </li>
                ))
              : ''}
          </ul>
        </div>
        <footer className="details-footer">
          <div className="cart-info">
            <p className="cart-amount">
              <abbr title="Amount">T: {getFormatedPrice(cartAmount || 0)}</abbr>
            </p>
            <p className="cart-total-items" translate="no">
              <abbr title="Total items">
                I: {productsCart ? productsCart.length : 0}
              </abbr>
            </p>
          </div>
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
