import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import axios from '../../services/axios';

import { Section, Article, ProductContainer } from './styled';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  // const [qs] = useSearchParams();

  useEffect(() => {
    async function listProducts() {
      try {
        dispatch(globalActions.startLoad());

        const response = await axios.get('products/');

        setProducts(response.data.results);

        dispatch(globalActions.finishLoad());
      } catch (err) {
        dispatch(globalActions.dispatchAction(actions.logoutRequest));
      }
    }

    listProducts();
  }, [dispatch]);

  return (
    <Section className="product">
      {products.map((product) => (
        <Article key={product.id}>
          <ProductContainer>
            <span className="stock">{product.stock}</span>
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
              {product.promotional_price !== 0 ? (
                <div className="product-price">
                  <span className="price">R${product.price}</span>
                  <span className="price promotional">
                    R${product.promotional_price}
                  </span>
                </div>
              ) : (
                <span className="product-price">R${product.price}</span>
              )}
            </div>
          </ProductContainer>
        </Article>
      ))}
    </Section>
  );
}
