import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { FaCartPlus, FaCaretDown, FaRegHeart, FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/cart';
import { FavoritesContext } from '../../context/favorites';
import axios from '../../services/axios';
import { Section, Article, ProductContainer } from './styled';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';
import {
  getPercentageDiscount,
  formatTextLength,
  getFormatedPrice,
} from '../../utils';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [qs] = useSearchParams();
  const searchTerm = qs.get('search') || '';

  const { addProductCart } = useContext(CartContext);
  const { toggleProductFav, checkProductIsFav } = useContext(FavoritesContext);

  useEffect(() => {
    async function listProducts() {
      try {
        dispatch(globalActions.startLoad());

        const productsResponse = await axios.get(
          'products/?search='.concat(searchTerm)
        );

        setProducts(productsResponse.data.results);
        dispatch(globalActions.finishLoad());
      } catch (err) {
        dispatch(globalActions.dispatchAction(actions.logoutRequest));
      }
    }

    listProducts();
  }, [dispatch, searchTerm]);

  return (
    <Section className="product">
      {products.map((product) => (
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
                <a href="/">
                  <img src={product.cover} alt={`Product: ${product.name}`} />
                </a>
              </div>
            ) : (
              ''
            )}

            <div className="product-header">
              <a href="/">
                <h2>{formatTextLength(product.name)}</h2>
              </a>
            </div>

            <div className="product-footer">
              <button
                className="fav-button"
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
                onClick={() => {
                  addProductCart(product.id, product);
                  toast.info('Product added to the cart successfully', {
                    autoClose: 1000,
                    position: 'top-left',
                  });
                }}
              >
                <FaCartPlus className="add-cart" size={15} />
              </button>
            </div>
          </ProductContainer>
        </Article>
      ))}
    </Section>
  );
}
