import React, { useState, useRef } from 'react';
import { FiAlertOctagon } from 'react-icons/fi';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart';
import { useAuth } from '../../context/auth';
import axios from '../../services/axios';
import { Section } from './styled';
import Modal from '../../components/Modal';

export default function Payment() {
  // Location and Navigation
  const location = useLocation();
  const navigate = useNavigate();

  const { redirected } = location.state || false;

  // Contexts
  const { productsCart, setCart, amount, getFormatedPrice } = useCart();
  const { accessToken } = useAuth();

  // States
  const [showModal, setShowModal] = useState(false);
  const [productsNotAvailable, setProductNotAvailable] = useState([]);

  // references
  const refCheckoutForm = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (productsNotAvailable.length > 0) {
      setCart(productsNotAvailable);
    }

    try {
      const response = await axios.post(
        'create-checkout-session/',
        {
          products: productsCart,
        },
        {
          Authorization: `Bearer ${accessToken}`,
        }
      );

      const { checkout_url: checkoutUrl } = response.data;

      window.open(checkoutUrl, '_self');
    } catch (err) {
      if (
        err.response.status === 400 &&
        err.response.data.error === 'Some products are not available'
      ) {
        const { products } = err.response.data;

        setProductNotAvailable(() => [...products]);
        setShowModal(true);
      }
    }
  };

  const handleClick = () => {
    setShowModal(false);

    refCheckoutForm.current.requestSubmit();
  };

  return redirected ? (
    <Section>
      <Modal show={Boolean(showModal)}>
        <div className="products-not-available">
          <header className="modal-header">
            <div className="close-container">
              <button
                type="button"
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                Back
              </button>
            </div>
            <h2>Don`t available</h2>
          </header>
          <div className="explanation-container">
            <span className="icon">
              <FiAlertOctagon />
            </span>

            <p className="explanation-text">
              <strong>
                We are sorry, but the products listed below are not available at
                this time.
              </strong>
            </p>
          </div>
          <div className="wrapper">
            <ul className="dont-available-list">
              {productsNotAvailable.map((product) => (
                <li key={product.id}>
                  <article>{product.name}</article>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="actions">
          <p>Remove these products and continue?</p>
          <div className="options">
            <button type="button" onClick={handleClick}>
              Yes
            </button>
            <button
              type="button"
              onClick={() => navigate('/cart', { replace: true })}
            >
              No
            </button>
          </div>
        </div>
        <hr />
        <hr />
      </Modal>
      <header className="checkout-review-header">
        <h2 className="title">Checkout Review</h2>
      </header>
      <div className="order-notice">
        <span className="icon">
          <FiAlertOctagon />
        </span>
        <p>
          <strong>
            Before completing the checkout process, we will verify that all
            products are available. This may take a few moments.
          </strong>
        </p>
      </div>
      <div className="order-review">
        <h3>Order Review:</h3>

        <hr />

        <div className="wrapper">
          <ul className="order-list">
            {productsCart.map((item) => (
              <li key={item.id} className="order-item">
                <h4>{item.product.name}</h4>
                <div className="order-item-qty">
                  <p>
                    <strong>{item.qty}</strong>
                  </p>
                </div>
                <div className="order-item-information">
                  <p className="price">
                    <strong>
                      <span>
                        {getFormatedPrice(
                          item.product.promotional_price || item.product.price
                        )}
                      </span>
                    </strong>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <hr />

        <div className="order-information">
          <p className="order-amount">
            <strong>Total: {getFormatedPrice(amount)}</strong>
          </p>
          <p>
            <strong>Items: {productsCart.length}</strong>
          </p>
        </div>
      </div>
      <form
        className="checkout-form"
        onSubmit={handleSubmit}
        ref={refCheckoutForm}
        method="POST"
      >
        <button
          aria-label="checkout button"
          className="checkout-button"
          type="submit"
        >
          Checkout
        </button>
      </form>
    </Section>
  ) : (
    <Navigate to="/cart" replace />
  );
}
