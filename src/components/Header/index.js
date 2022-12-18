/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from 'react-redux';

import React from 'react';
import {
  FaSignOutAlt,
  FaSignInAlt,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaChevronRight,
  FaBars,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Header, Nav, Form } from './styled';

export default function MainHeader() {
  const { isAuthenticated } = useSelector((state) => state.authReducer);

  const categoryNavHandleClick = () => {
    const toggleMenu = document.querySelector('.toggle-category-menu');
    const categoryNav = document.querySelector('.category-nav');

    categoryNav.classList.toggle('active');

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
        >
          <FaChevronRight size={10} onClick={categoryNavHandleClick} />
        </button>
        <ul className="category-list">
          <li className="category-item">
            <a href="#">Category-1</a>{' '}
          </li>
          <li className="category-item">
            <a href="#">Category-2</a>
          </li>
          <li className="category-item">
            <a href="#">Category-3</a>
          </li>
          <li className="category-item">
            <a href="#">Category-4</a>
          </li>
        </ul>
        <button
          type="button"
          onClick={categoryNavHandleClick}
          className="toggle-category-menu off"
        >
          <AiOutlineClose size={10} />
        </button>
      </nav>

      <div>
        <h1>
          <Link to="/">E-commerce</Link>
        </h1>
      </div>

      <Form className="search-form">
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
          onClick={mainNavHandleClick}
        >
          <FaBars size={18} />
        </button>

        <ul className="nav-items">
          <li>
            <Link to="#">
              <FaShoppingCart size={20} className="icons" />
            </Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link to="/user">
                <FaUser size={20} className="icons" />
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <FaSignInAlt size={20} className="icons" />
              </Link>
            </li>
          )}

          {isAuthenticated ? (
            <li>
              <Link to="#">
                <FaSignOutAlt size={20} className="icons" />
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </Nav>
    </Header>
  );
}
