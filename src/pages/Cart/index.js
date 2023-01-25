import React, { useContext } from 'react';
import { get } from 'lodash';
import { FaRegHeart, FaCaretDown, FaPlus, FaMinus } from 'react-icons/fa';
import { BsWallet2 } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/cart';
import { Section, ProductContainer, Article } from './styled';

export default function Cart() {
  const { productsCart, addProductCart, removeProductCart } =
    useContext(CartContext);

  function getPercentageDiscount(price, promotionalPrice) {
    const descValue = price - promotionalPrice;

    return String(((descValue / price) * 100).toFixed(0)).concat('%');
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
                    <h2>{item.product.name}</h2>
                  </a>
                </div>

                <div className="product-footer">
                  <button type="button" className="add-fav">
                    <FaRegHeart size={18} />
                  </button>
                  {item.product.promotional_price ? (
                    <div className="product-price">
                      <span className="price old">R${item.product.price}</span>
                      <span className="price promotional">
                        R${item.product.promotional_price}
                      </span>
                    </div>
                  ) : (
                    <span className="product-price">
                      R${item.product.price}
                    </span>
                  )}
                  <div className="cart-controls">
                    <button
                      onClick={() => {
                        addProductCart(item.id);
                        toast.info('Product added to the cart successfully', {
                          autoClose: 1000,
                          position: 'top-center',
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
                            position: 'top-center',
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

      <div className="cart-container">
        <article>
          <header className="cart-header">
            <h2>Cart</h2>
          </header>

          <div className="cart-details">
            <div className="cart-items">Total de itens: 2</div>
            <div className="cart-amount">Valor total: 2</div>
          </div>
        </article>
      </div>
    </Section>
  );
}
