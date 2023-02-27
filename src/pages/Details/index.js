import React, { useContext } from 'react';

import { MdPayment } from 'react-icons/md';
import { FaCartPlus, FaHeart, FaRegHeart, FaCaretDown } from 'react-icons/fa';
import { get } from 'lodash';
import { Parser } from 'html-to-react';
import { FavoritesContext } from '../../context/favorites';
import { CartContext } from '../../context/cart';
import { Section } from './styled';
import { getFormatedPrice, getPercentageDiscount } from '../../utils';
import { useAxiosGetDetails } from '../../hooks';

export default function Details() {
  const { toggleProductFav, checkProductIsFav } = useContext(FavoritesContext);
  const { addProductCart } = useContext(CartContext);
  const htmlParser = new Parser();

  const { data: product } = useAxiosGetDetails('products/');

  return product ? (
    <Section className="product-detail-section">
      <header className="product-detail-header">
        <h3>{product.name}</h3>
      </header>
      <div className="product-detail-image">
        <img src={get(product, 'cover', '')} alt={`product: ${product.name}`} />
      </div>
      <article className="product-detail-description">
        {htmlParser.parse(product.description)}
      </article>
      <footer className="product-detail-footer">
        {product.promotional_price ? (
          <span className="per-des">
            {getPercentageDiscount(product.price, product.promotional_price)}
            <span className="arrow-down">
              <FaCaretDown size={13} />
            </span>
          </span>
        ) : (
          ''
        )}
        <p className="product-price">
          {product.promotional_price ? (
            <>
              <span className="old">{getFormatedPrice(product.price)}</span>
              <span className="promotional">
                {getFormatedPrice(product.promotional_price)}
              </span>
            </>
          ) : (
            <span>{getFormatedPrice(product.price)}</span>
          )}
        </p>
        <div className="product-detail-actions">
          <button type="button" className="buy-product">
            <span>
              <MdPayment size={15} />
            </span>
            <p>Buy product</p>
          </button>

          <button
            onClick={() => {
              addProductCart(product.id, product);
            }}
            type="button"
            className="add-cart"
          >
            <span>
              <FaCartPlus size={13} />
            </span>
            <p>Add to cart</p>
          </button>
          <button
            onClick={() => toggleProductFav(product.id)}
            type="button"
            className="add-favorites"
          >
            <span>
              {checkProductIsFav(product.id) ? (
                <FaHeart size={13} className="remove" />
              ) : (
                <FaRegHeart size={13} className="add" />
              )}
            </span>
            <p>Add to favorites</p>
          </button>
        </div>
      </footer>
    </Section>
  ) : (
    ''
  );
}
