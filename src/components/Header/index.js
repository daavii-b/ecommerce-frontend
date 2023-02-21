import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';

import { Header, Nav, Form } from './styled';
import axios from '../../services/axios';

export default function MainHeader() {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authReducer);

  const categoryNavHandleClick = async () => {
    const toggleMenu = document.querySelector('.toggle-category-menu');
    const categoryNav = document.querySelector('.category-nav');

    categoryNav.classList.toggle('active');

    const categoriesResponse = await axios.get('categories/');
    setCategories(categoriesResponse.data.results);

    if (categoryNav.classList.contains('active')) {
      toggleMenu.setAttribute('aria-expanded', true);
    } else {
      toggleMenu.setAttribute('aria-expanded', false);
    }
  };

  const mainNavHandleClick = () => {
    const toggleNavBar = document.querySelector('.toggle-navbar');
    const mainNavbar = document.querySelector('.main-navbar');

    mainNavbar.classList.toggle('active');

    toggleNavBar.setAttribute('aria-expanded', true);

    setTimeout(() => {
      mainNavbar.classList.remove('active');
      toggleNavBar.setAttribute('aria-expanded', false);
    }, 3000);
  };

  return (
    <Header>
      <nav className="category-nav">
        <button
          type="button"
          className="toggle-category-menu"
          aria-expanded="false"
          aria-label="Toggle category navigation"
        >
          <FaChevronRight size={10} onClick={categoryNavHandleClick} />
        </button>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.id}>
              <a href={`?category=${category.name}`}>{category.name}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={categoryNavHandleClick}
          className="toggle-category-menu off"
          aria-label="Close category navigation"
        >
          <AiOutlineClose size={10} />
        </button>
      </nav>

      <div>
        <h1>
          <Link to="/" translate="no">
            E-commerce
          </Link>
        </h1>
      </div>

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

      <Nav className="main-navbar">
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
              <FaShoppingCart size={15} className="icons" />
            </Link>
          </li>

          <li>
            <Link aria-label="Navigate to favorites" to="/cart">
              <FaHeart size={15} className="icons" />
            </Link>
          </li>

          <li>
            <Link aria-label="Navigate to user profile" to="/users">
              <FaUser size={15} className="icons" />
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
                <FaSignOutAlt
                  aria-label="Make logout"
                  size={15}
                  className="icons"
                />
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
