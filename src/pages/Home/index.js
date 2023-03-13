import React, { useState, useEffect } from 'react';
import { FaCartPlus, FaRegHeart, FaHeart, FaCaretDown } from 'react-icons/fa';
import { useCart } from '../../context/cart';
import { useFav } from '../../context/favorites';
import { Section, ProductWrapper, CategorySection } from './styled';

import Pagination from '../../components/Pagination';
import { useAxios } from '../../hooks';

export default function Home() {
  const { addProductCart, getFormatedPrice, getPercentageDiscount } = useCart();
  const { toggleProductFav, checkProductIsFav } = useFav();

  const { data: products, count } = useAxios('products/');

  const [category, setCategory] = useState();

  const choice = (choices) => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  };

  useEffect(
    () => setCategory(() => choice(products)?.category_name),
    [products]
  );

  return (
    <>
      <Section className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductWrapper key={product.id} className="wrapper">
              <div className="product-container">
                <span className="discount">
                  {getPercentageDiscount(product)}
                  <FaCaretDown />
                </span>
                <div className="product-image">
                  <img src={product.cover} alt="" />
                </div>
                <div className="product-header">
                  <h2>
                    <a href="/">{product.name}</a>
                  </h2>
                </div>
                <div className="product-price">
                  {product.promotional_price ? (
                    <>
                      <span className="price old">
                        <p>{getFormatedPrice(product.price)}</p>
                      </span>
                      <span className="promotional-price">
                        <p>{getFormatedPrice(product.promotional_price)}</p>
                      </span>
                    </>
                  ) : (
                    <span className="price">
                      <p>{getFormatedPrice(product.price)}</p>
                    </span>
                  )}
                </div>
                <div className="info">
                  <div className="stock">
                    <p>Stock: {product.stock}</p>
                  </div>
                  <div className="controls">
                    <button
                      className="fav-button"
                      aria-label="Click to add product in favorites"
                      onClick={() => toggleProductFav(product.id)}
                      type="button"
                    >
                      {checkProductIsFav(product.id) ? (
                        <FaHeart className="remove" />
                      ) : (
                        <FaRegHeart className="add" />
                      )}
                    </button>
                    <button
                      type="button"
                      className="add-cart-button"
                      aria-label="Click to add product in cart"
                      onClick={() => {
                        addProductCart(product.id, product);
                      }}
                    >
                      <FaCartPlus className="add-cart" />
                    </button>
                  </div>
                </div>
              </div>
            </ProductWrapper>
          ))
        ) : (
          <div className="empty-feedback">
            <h2>We are sorry, but there are no products to show.</h2>
          </div>
        )}
      </Section>
      <CategorySection className="suggested-categories-section">
        <div className="wrapper">
          <h2>{category}</h2>
          <ul>
            {products
              .filter((product) => product.category_name === category)
              .map((product) => (
                <li key={product.id}>
                  <article className="product">
                    <div className="product-container">
                      <div className="product-image">
                        <img src={product.cover} alt="" />
                      </div>
                      <div className="product-header">
                        <h2>
                          <a href="/">{product.name}</a>
                        </h2>
                      </div>
                      <div className="product-price">
                        {product.promotional_price ? (
                          <>
                            <span className="price old">
                              <p>{getFormatedPrice(product.price)}</p>
                            </span>
                            <span className="promotional-price">
                              <p>
                                {getFormatedPrice(product.promotional_price)}
                              </p>
                            </span>
                          </>
                        ) : (
                          <span className="price">
                            <p>{getFormatedPrice(product.price)}</p>
                          </span>
                        )}
                      </div>
                      <div className="info">
                        <div className="stock">
                          <p>Stock: {product.stock}</p>
                        </div>
                        <div className="controls">
                          <button
                            className="fav-button"
                            aria-label="Click to add product in favorites"
                            onClick={() => toggleProductFav(product.id)}
                            type="button"
                          >
                            {checkProductIsFav(product.id) ? (
                              <FaHeart className="remove" />
                            ) : (
                              <FaRegHeart className="add" />
                            )}
                          </button>
                          <button
                            type="button"
                            className="add-cart-button"
                            aria-label="Click to add product in cart"
                            onClick={() => {
                              addProductCart(product.id, product);
                            }}
                          >
                            <FaCartPlus className="add-cart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
          </ul>
        </div>
      </CategorySection>
      <Pagination count={count} />
    </>
  );
}
