import React, { useState, useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  FaSignOutAlt,
  FaSignInAlt,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaChevronRight,
  FaBars,
  FaHeart,
} from 'react-icons/fa';
import { AuthContext } from '../../context/auth';

import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';

import { Header, Nav, Form } from './styled';
import axios from '../../services/axios';

export default function MainHeader() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);

  // elements references
  const refMainNavBar = useRef(null);
  const refCategoryNavBar = useRef(null);
  // const refSearchForm = useRef(null);

  const categoryNavHandleClick = async () => {
    const toggleMenu = document.querySelector('.toggle-category-menu');

    refCategoryNavBar.current.classList.toggle('active');

    const categoriesResponse = await axios.get('categories/');
    setCategories(categoriesResponse.data.results);

    if (refCategoryNavBar.current.classList.contains('active')) {
      toggleMenu.setAttribute('aria-expanded', true);
    } else {
      toggleMenu.setAttribute('aria-expanded', false);
    }
  };

  const mainNavHandleClick = () => {
    const toggleNavBar = document.querySelector('.toggle-navbar');

    refMainNavBar.current.classList.toggle('active');

    toggleNavBar.setAttribute('aria-expanded', true);

    setTimeout(() => {
      refMainNavBar.current.classList.toggle('active');
      toggleNavBar.setAttribute('aria-expanded', false);
    }, 3200);
  };

  return (
    <Header>
      {/* CATEGORY NAVIGATION BAR */}
      <nav ref={refCategoryNavBar} className="category-nav">
        <button
          type="button"
          className="toggle-category-menu"
          aria-expanded="false"
          aria-label="Toggle category navigation"
        >
          <FaChevronRight size={10} onClick={categoryNavHandleClick} />
        </button>
        <button
          type="button"
          onClick={categoryNavHandleClick}
          className="toggle-category-menu off"
          aria-label="Close category navigation"
        >
          <AiOutlineClose size={10} />
        </button>

        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.id}>
              <a href={`?category=${category.name}`}>{category.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* hEADER TITLE */}
      <div>
        <h1>
          <Link to="/" translate="no">
            E-commerce
          </Link>
        </h1>
      </div>

      {/* SEARCH FORM */}
      <Form className="search-form" action="/">
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
          aria-label="Toggle navigation bar"
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
