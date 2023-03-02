import React, { useContext } from 'react';
import { get } from 'lodash';
import { FaCartPlus, FaCaretDown, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useCart } from '../../context/cart';
import { FavoritesContext } from '../../context/favorites';
import { Section, Article, ProductContainer } from './styled';
import {
  getPercentageDiscount,
  formatTextLength,
  getFormatedPrice,
} from '../../utils';
import Pagination from '../../components/Pagination';
import { useAxios } from '../../hooks';

export default function Home() {
  const { addProductCart } = useCart();
  const { toggleProductFav, checkProductIsFav } = useContext(FavoritesContext);

  const { data: products, count } = useAxios('products/');

  return (
    <>
      <Section className="product">
        {products
          ? products.map((product) => (
              <Article key={product.id}>
                <ProductContainer>
                  <abbr title="Units" className="stock">
                    {product.stock}
                  </abbr>
                  {product.promotional_price ? (
                    <span className="per-des">
                      {getPercentageDiscount(
                        product.price,
                        product.promotional_price
                      )}
                      <span className="arrow-down">
                        <FaCaretDown size={13} />
                      </span>
                    </span>
                  ) : (
                    ''
                  )}
                  {get(product, 'cover', '') ? (
                    <div className="product-image">
                      <a href={`/product/${product.slug}`}>
                        <img
                          src={product.cover}
                          alt={`Product: ${product.name}`}
                        />
                      </a>
                    </div>
                  ) : (
                    ''
                  )}

                  <div className="product-header">
                    <a href={`/product/${product.slug}`}>
                      <h2>{formatTextLength(product.name)}</h2>
                    </a>
                  </div>

                  <div className="product-footer">
                    <button
                      className="fav-button"
                      aria-label="Click to add product in favorites"
                      onClick={() => toggleProductFav(product.id)}
                      type="button"
                    >
                      {checkProductIsFav(product.id) ? (
                        <FaHeart size={15} className="remove" />
                      ) : (
                        <FaRegHeart size={15} className="add" />
                      )}
                    </button>
                    {product.promotional_price ? (
                      <div className="product-price">
                        <span translate="no" className="price old">
                          {getFormatedPrice(product.price)}
                        </span>
                        <span translate="no" className="price promotional">
                          {getFormatedPrice(product.promotional_price)}
                        </span>
                      </div>
                    ) : (
                      <span translate="no" className="product-price">
                        {getFormatedPrice(product.price)}
                      </span>
                    )}
                    <button
                      type="button"
                      className="add-cart-button"
                      aria-label="Click to add product in cart"
                      onClick={() => {
                        addProductCart(product.id, product);
                      }}
                    >
                      <FaCartPlus className="add-cart" size={15} />
                    </button>
                  </div>
                </ProductContainer>
              </Article>
            ))
          : ''}
      </Section>
      <Pagination count={count} />
    </>
  );
}
