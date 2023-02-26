import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { FaCartPlus, FaCaretDown, FaRegHeart, FaHeart } from 'react-icons/fa';
import { CartContext } from '../../context/cart';
import { FavoritesContext } from '../../context/favorites';
import axios from '../../services/axios';
import { Section, Article, ProductContainer } from './styled';
import {
  getPercentageDiscount,
  formatTextLength,
  getFormatedPrice,
} from '../../utils';
import Pagination from '../../components/Pagination';

export default function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [qs] = useSearchParams();
  const searchTerm = qs.get('search') || '';
  const currentPage = Number(qs.get('page')) || 1;
  const categoryFilter = qs.get('category') || '';

  const { addProductCart } = useContext(CartContext);
  const { toggleProductFav, checkProductIsFav } = useContext(FavoritesContext);

  useEffect(() => {
    async function listProducts() {
      try {
        const productsResponse = await axios.get(
          `products/?search=${searchTerm}&category=${categoryFilter}&page=${currentPage}`
        );

        setTotalProducts(productsResponse.data.count);
        setProducts(productsResponse.data.results);
      } catch (err) {
        console.error(err);
      }
    }

    listProducts();
  }, [currentPage, dispatch, searchTerm, categoryFilter]);

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
      <Pagination
        currentPage={currentPage}
        totalProducts={totalProducts}
        searchTerm={searchTerm}
        categoryFilter={categoryFilter}
      />
    </>
  );
}
