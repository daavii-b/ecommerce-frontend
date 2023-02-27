import React, { useContext, useRef } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
  FaSignOutAlt,
  FaSignInAlt,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaHeart,
} from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { AuthContext } from '../../context/auth';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';
import { Header, Nav, CategoryNav, Form } from './styled';
import { useAxios } from '../../hooks';

export default function MainHeader() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();

  const { isAuthenticated } = useContext(AuthContext);
  const { data: categories } = useAxios('categories/');

  // elements references
  const refMainNavBar = useRef(null);
  const refCategoryNavBar = useRef(null);
  const refToggleMainNavBar = useRef(null);
  const refToggleCategoryNavBar = useRef(null);

  const categoryNavHandleClick = () => {
    refCategoryNavBar.current.classList.toggle('active');

    if (refCategoryNavBar.current.classList.contains('active')) {
      refToggleCategoryNavBar.current.setAttribute('aria-expanded', 'true');
    } else {
      refToggleCategoryNavBar.current.setAttribute('aria-expanded', 'false');
    }
  };

  const mainNavHandleClick = () => {
    refMainNavBar.current.classList.toggle('active');

    refToggleMainNavBar.current.setAttribute('aria-expanded', true);

    setTimeout(() => {
      refMainNavBar.current.classList.toggle('active');
      refToggleMainNavBar.current.setAttribute('aria-expanded', false);
    }, 3200);
  };

  return (
    <Header>
      {/* CATEGORY NAVIGATION BAR */}

      {location.pathname === '/' ? (
        <CategoryNav ref={refCategoryNavBar} className="category-navbar">
          <div>
            <h2>
              <button
                ref={refToggleCategoryNavBar}
                aria-expanded="false"
                onClick={categoryNavHandleClick}
                aria-label="Toggle category navigation"
                className="toggle-category-nav"
                type="button"
              >
                <span>
                  <BiCategory />
                </span>
                Categories
              </button>
            </h2>
          </div>
          <ul className="categories-list">
            {categories
              ? categories.map((category) => (
                  <li key={category.id} className="category-item">
                    <div className="category-container">
                      <button
                        type="button"
                        className="category"
                        aria-label={`Filter products by category ${category.name}`}
                        onClick={() => {
                          params.delete('page');
                          params.delete('search');
                          params.set('category', category.name);
                          setParams(params);
                        }}
                      >
                        {category.name}
                      </button>
                    </div>
                  </li>
                ))
              : ''}
          </ul>
        </CategoryNav>
      ) : (
        ''
      )}

      {/* HEADER TITLE */}
      <div>
        <h1>
          <Link aria-label="Go to home page" to="/" translate="no">
            E-commerce
          </Link>
        </h1>
      </div>

      {/* SEARCH FORM */}
      <Form
        className="search-form"
        onSubmit={(event) => {
          const form = new FormData(event.target);
          params.delete('page');
          params.delete('category');
          params.set('search', form.get('search'));
          setParams(params);
        }}
        action="/"
      >
        <label htmlFor="search">
          <FaSearch size={15} className="search-icon" />
          <input
            type="text"
            name="search"
            id="search"
            className="search-input"
            placeholder="Search for products"
          />
        </label>
      </Form>

      {/* MAIN NAVIGATION BAR */}
      <Nav ref={refMainNavBar} className="main-navbar">
        <button
          type="button"
          className="toggle-navbar"
          aria-expanded="false"
          aria-label="Toggle main navigation bar"
          ref={refToggleMainNavBar}
          onClick={mainNavHandleClick}
        >
          <FaBars size={18} />
        </button>

        <ul className="nav-items">
          <li>
            <Link aria-label="Navigate to cart" to="/cart">
              <FaShoppingCart className="icons" />
            </Link>
          </li>

          <li>
            <Link aria-label="Navigate to favorites" to="/cart">
              <FaHeart className="icons" />
            </Link>
          </li>

          <li>
            <Link aria-label="Navigate to user profile" to="/users">
              <FaUser className="icons" />
            </Link>
          </li>

          {isAuthenticated ? (
            <li>
              <Link
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(
                    globalActions.dispatchAction(actions.logoutRequest, {
                      userLogout: true,
                    })
                  );
                }}
                to="/logout"
              >
                <FaSignOutAlt aria-label="Make logout" className="icons" />
              </Link>
            </li>
          ) : (
            <li>
              <Link aria-label="Navigate to login" to="/login">
                <FaSignInAlt size={15} className="icons" />
              </Link>
            </li>
          )}
        </ul>
      </Nav>
    </Header>
  );
}
