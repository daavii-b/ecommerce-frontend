import React, { useContext } from 'react';
import { get } from 'lodash';
import { FaRegHeart, FaCaretDown, FaPlus, FaMinus } from 'react-icons/fa';
import { BsWallet2 } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/cart';
import { Section, ProductContainer, Article } from './styled';

export default function Cart() {
  const { productsCart, addProductCart, removeProductCart, clearCart } =
    useContext(CartContext);

  let productTotalAmount = 0;

  function getPercentageDiscount(price, promotionalPrice) {
    const descValue = price - promotionalPrice;

    return String(((descValue / price) * 100).toFixed(0)).concat('%');
  }

  function formatTextLength(text) {
    return text.length > 28 ? `${text.substring(0, 25)}...` : text;
  }

  function geFormatedPartialValue(price, index, qty) {
    productTotalAmount += price * qty;
    return `P${index + 1} - R$${price.toFixed(2)} x ${qty} = R$${(
      price * qty
    ).toFixed(2)}`;
  }

  return (
    <Section className="cart-products">
      <div className="product-wrapper">
        {productsCart.length > 0 ? (
          productsCart.map((item) => (
            <Article key={item.id}>
              <ProductContainer className="product-container">
                <span className="stock">units: {item.product.stock}</span>
                {item.product.promotional_price ? (
                  <span className="per-des">
                    {getPercentageDiscount(
                      item.product.price,
                      item.product.promotional_price
                    )}
                    <span className="arrow-down">
                      <FaCaretDown size={15} />
                    </span>
                  </span>
                ) : (
                  ''
                )}
                <div className="product-image">
                  <span className="qty-p">{item.qty}</span>
                  <div className="product-cover">
                    {get(item.product, 'cover', '') ? (
                      <div className="product-image">
                        <a href="/">
                          <img
                            src={item.product.cover}
                            alt={`Product: ${item.product.name}`}
                          />
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="product-header">
                  <a href="/">
                    <h2>{formatTextLength(item.product.name)}</h2>
                  </a>
                </div>

                <div className="product-footer">
                  <button type="button" className="add-fav">
                    <FaRegHeart size={16} />
                  </button>
                  {item.product.promotional_price ? (
                    <div className="product-price">
                      <span translate="no" className="price old">
                        R${item.product.price}
                      </span>
                      <span translate="no" className="price promotional">
                        R${item.product.promotional_price}
                      </span>
                    </div>
                  ) : (
                    <span translate="no" className="product-price">
                      R${item.product.price}
                    </span>
                  )}
                  <div className="cart-controls">
                    <button
                      onClick={() => {
                        addProductCart(item.id);

                        toast.info('Product added to the cart successfully', {
                          autoClose: 1000,
                          position: 'top-left',
                        });
                      }}
                      type="button"
                    >
                      <FaPlus size={10} />
                    </button>
                    <button
                      onClick={() => {
                        removeProductCart(item.id);
                        toast.info(
                          'Product removed from the cart successfully',
                          {
                            autoClose: 1000,
                            position: 'top-left',
                          }
                        );
                      }}
                      type="button"
                    >
                      <FaMinus size={10} />
                    </button>
                  </div>
                </div>
              </ProductContainer>
            </Article>
          ))
        ) : (
          <div className="empty-cart">
            <h2>Your cart is empty.</h2>
            <p>It is time to go shopping.</p>
            <span>
              <p className="sifr">$</p>
              <BsWallet2 className="wallet-icon" size={50} />
            </span>
          </div>
        )}
      </div>

      <div className="cart-details-container">
        <article>
          <header className="cart-details-header">
            <h2>Cart</h2>
          </header>

          {productsCart.length > 0 ? (
            <>
              <div className="cart-details-content">
                <div className="products-values-container">
                  <ul className="cart-products-values-list">
                    {productsCart.map((item, index) => (
                      <li key={item.id} className="cart-product-value">
                        {item.product.promotional_price ? (
                          <article className="product-item">
                            <p translate="no">
                              {geFormatedPartialValue(
                                item.product.promotional_price,
                                index,
                                item.qty
                              )}
                            </p>
                          </article>
                        ) : (
                          <article className="product-item">
                            <p translate="no">
                              {geFormatedPartialValue(
                                item.product.price,
                                index,
                                item.qty
                              )}
                            </p>
                          </article>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <footer className="cart-details-footer">
                  <div className="cart-items">
                    <p>Total items: {productsCart.length}</p>
                  </div>
                  <div className="cart-amount">
                    <p>
                      Amount: <span translate="no">R${productTotalAmount}</span>
                    </p>
                  </div>
                </footer>
              </div>
              <div className="cart-actions-container">
                <button type="button" className="ready-to-pay">
                  <span className="action-icon">
                    <MdPayment size={15} className="icon" />
                    Ready to pay
                  </span>
                </button>
                <button
                  type="button"
                  className="clear-cart"
                  onClick={() => clearCart()}
                >
                  <span className="action-icon">
                    <AiOutlineClear size={15} className="icon" />
                    Clear cart
                  </span>{' '}
                </button>
              </div>
            </>
          ) : (
            ''
          )}
        </article>
      </div>
    </Section>
  );
}
