import React, { useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

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
import * as actions from '../../store/modules/auth/actions';
import { Header, Nav, Form } from './styled';
import { useAuth } from '../../context/auth';

export default function MainHeader() {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();

  const { isAuthenticated } = useAuth();

  // elements references
  const refMainNavBar = useRef(null);
  const refToggleMainNavBar = useRef(null);

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

          params.set('search', form.get('search'));

          setParams(() => ({ ...params }));
        }}
        action="/"
      >
        <label htmlFor="search">
          <FaSearch className="search-icon" />
          <input
            type="search"
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
                  dispatch(actions.logoutUser());
                }}
                to="/logout"
              >
                <FaSignOutAlt aria-label="Make logout" className="icons" />
              </Link>
            </li>
          ) : (
            <li>
              <Link aria-label="Navigate to login" to="/login">
                <FaSignInAlt className="icons" />
              </Link>
            </li>
          )}
        </ul>
      </Nav>
    </Header>
  );
}
