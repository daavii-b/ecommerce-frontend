/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from 'react-redux';

import React from 'react';
import {
  FaHome,
  FaSignOutAlt,
  FaSignInAlt,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaChevronRight,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Header, Nav, Form } from './styled';

export default function MainHeader() {
  const { isAuthenticated } = useSelector((state) => state.authReducer);

  const navHandleClick = () => {
    // if (event.type === 'touchstart') event.preventDefault();
    // const toggleMenu = document.querySelectorAll('.toggle-menu');
    const categoryNav = document.querySelector('.category-nav');

    categoryNav.classList.toggle('active');
  };

  return (
    <Header>
      <nav className="category-nav">
        <button type="button" className="toggle-menu" aria-expanded="false">
          <FaChevronRight
            size={10}
            // onTouchStart={menuHandleClick}
            onClick={navHandleClick}
          />
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
          onClick={navHandleClick}
          className="toggle-menu off"
        >
          <AiOutlineClose size={10} />
        </button>
      </nav>

      <div>
        <h1>E-commerce</h1>
      </div>

      <Form className="search-form">
        <label htmlFor="search">
          <FaSearch size={15} className="search-icon" />
          <input
            type="text"
            name="search"
            id="search"
            className="search-input"
          />
        </label>
      </Form>

      <Nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome size={18} className="icons" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaShoppingCart size={18} className="icons" />
            </Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link to="/user">
                <FaUser size={18} className="icons" />
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <FaSignInAlt size={18} className="icons" />
              </Link>
            </li>
          )}

          {isAuthenticated ? (
            <li>
              <Link to="#">
                <FaSignOutAlt size={18} className="icons" />
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
