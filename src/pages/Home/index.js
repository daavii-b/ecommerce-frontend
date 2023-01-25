import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { FaCartPlus, FaCaretDown, FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/cart';
import axios from '../../services/axios';
import { Section, Article, ProductContainer } from './styled';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [qs] = useSearchParams();
  const searchTerm = qs.get('search') || '';

  const { addProductCart } = useContext(CartContext);

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

  function getPercentageDiscount(price, promotionalPrice) {
    const descValue = price - promotionalPrice;

    return String(((descValue / price) * 100).toFixed(0)).concat('%');
  }

  return (
    <Section className="product">
      {products.map((product) => (
        <Article key={product.id}>
          <ProductContainer>
            <span className="stock">units: {product.stock}</span>
            {product.promotional_price ? (
              <span className="per-des">
                {getPercentageDiscount(
                  product.price,
                  product.promotional_price
                )}
                <span className="arrow-down">
                  <FaCaretDown size={15} />
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
                <h2>{product.name}</h2>
              </a>
            </div>

            <div className="product-footer">
              <button type="button" className="add-fav">
                <FaRegHeart size={18} />
              </button>
              {product.promotional_price ? (
                <div className="product-price">
                  <span className="price old">R${product.price}</span>
                  <span className="price promotional">
                    R${product.promotional_price}
                  </span>
                </div>
              ) : (
                <span className="product-price">R${product.price}</span>
              )}
              <button
                type="button"
                className="add-cart"
                onClick={() => {
                  addProductCart(product.id, product);
                  toast.info('Product added to the cart successfully', {
                    autoClose: 1000,
                    position: 'top-left',
                  });
                }}
              >
                <FaCartPlus size={18} />
              </button>
            </div>
          </ProductContainer>
        </Article>
      ))}
    </Section>
  );
}
