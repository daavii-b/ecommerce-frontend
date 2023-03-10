import React, { useRef, useState } from 'react';
import { get } from 'lodash';
import { AiOutlineClear } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import {
  FaRegHeart,
  FaHeart,
  FaCaretDown,
  FaPlus,
  FaMinus,
  FaAngleDoubleRight,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart';
import { useFav } from '../../context/favorites';
import { Section, ProductContainer, Article } from './styled';

export default function Cart() {
  const {
    productsCart,
    addProductCart,
    removeProductCart,
    clearCart,
    amount,
    getPercentageDiscount,
    getFormatedPrice,
  } = useCart();
  const { toggleProductFav, checkProductIsFav } = useFav();

  // Elements references
  const refProductsList = useRef(null);
  const refShowProductsListButton = useRef(null);
  const [showProducts, setShowProducts] = useState(false);

  const navigate = useNavigate();

  const handleShowProductsClick = () => {
    if (productsCart.length > 0) {
      refShowProductsListButton.current.toggleAttribute('disabled');
      refProductsList.current.classList.toggle('show');
      setShowProducts(!showProducts);
    } else {
      refShowProductsListButton.current.toggleAttribute('disabled');
    }
  };

  return (
    <Section className="cart-session">
      <section className="products-session">
        <header>
          <h2>Products List</h2>
        </header>

        <ul ref={refProductsList} className="product-list">
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
                      <h3 translate="no">{item.product.name}</h3>
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
                    {Boolean(item.product.promotional_price) && (
                      <div className="per-des">
                        <p>
                          {getPercentageDiscount(item.product, item.product)}
                        </p>
                        <span className="arrow-down">
                          <FaCaretDown size={12} />
                        </span>
                      </div>
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
        <button
          ref={refShowProductsListButton}
          type="button"
          className="show-products-button"
          onClick={handleShowProductsClick}
        >
          <span className="angle-icon">
            {showProducts ? <GoTriangleUp /> : <GoTriangleDown />}
          </span>
        </button>
        <footer className="product-session-footer">
          <div className="cart-info">
            <p className="cart-amount">Total: {getFormatedPrice(amount)}</p>
            <p className="cart-total-items" translate="no">
              Items: {productsCart.length || 0}
            </p>
          </div>
          <div className="cart-actions">
            <button
              onClick={() => {
                navigate('/payments', { state: { redirected: true } });
              }}
              className="ready-to-pay"
              type="button"
              {...(productsCart.length <= 0 && { disabled: true })}
            >
              <span>
                <MdPayment className="icon" size={13} />
              </span>
              Ready to pay
            </button>
            <button
              className="clear-cart"
              onClick={() => clearCart()}
              type="button"
              {...(productsCart.length <= 0 && { disabled: true })}
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
