/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';

import { Article, ProductContainer } from './styled';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function listProducts() {
      const response = await axios.get('products/');

      setProducts(response.data.results);
    }

    listProducts();
  }, []);

  return (
    <Article className="product">
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <div className="product-header">
            <h2>{product.name}</h2>
          </div>
          <div className="product-body">
            <p>{product.description}</p>
          </div>
          <div className="product-footer">
            <span className="price">{product.price}</span>
            <br />
            {product.promotional_price ? (
              <span className="promotional_price">
                {product.promotional_prices}
              </span>
            ) : (
              <span className="stock">{product.stock}</span>
            )}
          </div>
        </ProductContainer>
      ))}
    </Article>
  );
}
