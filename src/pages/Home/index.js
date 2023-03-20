import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaCartPlus,
  FaRegHeart,
  FaHeart,
  FaCaretDown,
  FaArrowRight,
} from 'react-icons/fa';
import { BiCategoryAlt, BiEqualizer } from 'react-icons/bi';
import { GrClear } from 'react-icons/gr';
import {
  IoIosPricetag,
  IoIosPricetags,
  IoIosCloseCircle,
} from 'react-icons/io';
import { useCart } from '../../context/cart';
import { useFav } from '../../context/favorites';
import {
  Section,
  ProductWrapper,
  CategorySection,
  FiltersNavigation,
} from './styled';

import Pagination from '../../components/Pagination';
import FilterModal from '../../components/Modal';
import {
  useAxios,
  useWindowResize,
  useFilter,
  useGetFilters,
} from '../../hooks';

export default function Home() {
  const resizing = useWindowResize();
  const refFilterList = useRef();
  const refFilteringTypeForm = useRef();
  const [category, setCategory] = useState();
  const location = useLocation();

  const { addProductCart, getFormatedPrice, getPercentageDiscount } = useCart();
  const { toggleProductFav, checkProductIsFav } = useFav();
  const { data: products, count } = useAxios('products/');

  const {
    handleFilters,
    handleAddFilterClick,
    handeClearFiltersClick,
    handleCloseFIlterClick,
    showModal,
    filtersTypes: filters,
    currentFilter,
    modalPosition,
    elementWidth,
    filterId: filterItemId,
    showClearFilterButton,
  } = useFilter(refFilterList, refFilteringTypeForm, resizing);

  const { filterData } = useGetFilters(filters, currentFilter);

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
      {['/', '/search'].includes(location.pathname) && (
        <FiltersNavigation>
          <div className="filters-container">
            <div
              className={
                showClearFilterButton
                  ? 'clear-filters-button show'
                  : 'clear-filters-button'
              }
            >
              <button onClick={handeClearFiltersClick} type="button">
                <GrClear className="icon" />
                Clear Filters
              </button>
            </div>

            <h2>Filters</h2>
            <ul ref={refFilterList}>
              <li id={filters.category}>
                <button
                  onClickCapture={handleFilters}
                  type="button"
                  className="filter-label"
                  aria-expanded={false}
                >
                  <BiCategoryAlt />
                  Categories
                  <span>
                    <FaCaretDown />
                  </span>
                </button>
              </li>
              <li id={filters.price}>
                <button
                  onClickCapture={handleFilters}
                  type="button"
                  className="filter-label"
                  aria-expanded={false}
                >
                  <IoIosPricetag />
                  Price
                  <span>
                    <FaCaretDown />
                  </span>
                </button>
              </li>
              <li id={filters.promotional}>
                <button
                  onClickCapture={handleFilters}
                  type="button"
                  className="filter-label"
                  aria-expanded={false}
                >
                  <IoIosPricetags /> Promotional
                  <span>
                    <FaCaretDown />
                  </span>
                </button>
              </li>
              <li id={filters.range}>
                <button
                  onClickCapture={handleFilters}
                  type="button"
                  className="filter-label"
                  aria-expanded={false}
                >
                  <BiEqualizer />
                  Range
                  <span>
                    <FaCaretDown />
                  </span>
                </button>
              </li>
            </ul>
            <div
              className={
                showModal ? 'close-filter-overlay show' : 'close-filter-overlay'
              }
              style={
                showModal
                  ? {
                      left: `${modalPosition - 31}px`,
                    }
                  : { left: 0 }
              }
            >
              <button
                onClick={handleCloseFIlterClick}
                type="button"
                className="close-overlay-button"
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>
          <FilterModal show>
            <div
              className={showModal ? 'wrapper show' : 'wrapper'}
              style={
                showModal
                  ? {
                      width: `${elementWidth}px`,
                      left: `${modalPosition}px`,
                    }
                  : { width: 0, left: 0 }
              }
            >
              {currentFilter !== filters.range ? (
                <ul className="filter-modal">
                  {currentFilter !== filters.category && (
                    <li className="choose-filter-method">
                      <form
                        ref={refFilteringTypeForm}
                        aria-label="Choose a filtering type"
                      >
                        <fieldset>
                          <legend>Filter by</legend>
                          <label htmlFor="filter-by-min">
                            Minimum
                            <input
                              type="radio"
                              name="filter-by"
                              id="filter-by-min"
                              value="min"
                            />
                          </label>
                          <label htmlFor="filter-by-max">
                            Maximum
                            <input
                              type="radio"
                              name="filter-by"
                              id="filter-by-max"
                              value="max"
                              defaultChecked
                            />
                          </label>
                        </fieldset>
                      </form>
                    </li>
                  )}
                  {filterData?.map((filter, index) => (
                    <li
                      className="filter-item"
                      key={`${filterItemId}${index + 1}`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          handleAddFilterClick({
                            currentFilterType: currentFilter,
                            filterValue: filter,
                          });
                        }}
                      >
                        {currentFilter === filters.category ? (
                          <>
                            <BiCategoryAlt />
                            {filter.name}
                          </>
                        ) : (
                          <>
                            {currentFilter === filters.price ? (
                              <IoIosPricetag />
                            ) : (
                              <IoIosPricetags />
                            )}
                            {getFormatedPrice(filter)}
                          </>
                        )}
                      </button>
                      <span className="track" />
                    </li>
                  ))}
                </ul>
              ) : (
                <form
                  aria-label="Set a filtering interval"
                  className="range-filter"
                >
                  <div className="field-group">
                    <label htmlFor="min">
                      <span className="input-label">
                        <IoIosPricetag className="icon" />
                        Min Price Value
                      </span>
                      <div className="input-container">
                        R$
                        <input type="number" defaultValue={0} />
                      </div>
                    </label>
                  </div>
                  <div className="field-group">
                    <label htmlFor="max">
                      <span className="input-label">
                        <IoIosPricetag className="icon" />
                        Max Price Value
                      </span>
                      <div className="input-container">
                        R$
                        <input type="number" defaultValue={0} />
                      </div>
                    </label>
                  </div>
                  <div className="field-group">
                    <label htmlFor="min">
                      <span className="input-label">
                        <IoIosPricetags className="icon" />
                        Min Promotional Value
                      </span>
                      <div className="input-container">
                        R$
                        <input type="number" defaultValue={0} />
                      </div>
                    </label>
                  </div>
                  <div className="field-group">
                    <label htmlFor="max">
                      <span className="input-label">
                        <IoIosPricetags className="icon" />
                        Max Promotional Value
                      </span>
                      <div className="input-container">
                        R$
                        <input type="number" defaultValue={0} />
                      </div>
                    </label>
                  </div>

                  <button
                    onClick={() => {
                      handleAddFilterClick({
                        filterType: currentFilter,
                        filterValue: 0,
                      });
                    }}
                    className="apply-filter-button"
                    type="button"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>
          </FilterModal>
        </FiltersNavigation>
      )}
      <Section className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductWrapper key={product.id} className="wrapper">
              <div className="product-container">
                {Boolean(product.promotional_price) && (
                  <span className="discount">
                    {getPercentageDiscount(product)}
                    <FaCaretDown />
                  </span>
                )}
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
            <h2>We are sorry, but there are not products to show.</h2>
          </div>
        )}
      </Section>
      <CategorySection className="suggested-categories-section">
        <div className="wrapper">
          <header>
            <h2>{category}</h2>
            <Link className="see-all" to="/cart">
              See All{' '}
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </header>
          <ul>
            {products
              .filter((product) => product.category_name === category)
              .slice(0, 11)
              .map((product) => (
                <li key={product.id}>
                  <article className="product">
                    <div className="product-container">
                      {Boolean(product.promotional_price) && (
                        <span className="discount">
                          {getPercentageDiscount(product)}
                          <FaCaretDown />
                        </span>
                      )}
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
