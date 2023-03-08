import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';
import { useLocation, Navigate } from 'react-router-dom';
import { useCart } from '../../context/cart';
import { useAuth } from '../../context/auth';
import axios from '../../services/axios';
import { Section } from './styled';

export default function Payment() {
  const location = useLocation();
  const { productsCart, amount, getFormatedPrice } = useCart();
  const { accessToken } = useAuth();

  const { redirected } = location.state || false;

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      console.log(err);
    }
  };

  return redirected ? (
    <Section>
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
      <form onSubmit={handleSubmit} method="POST">
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
