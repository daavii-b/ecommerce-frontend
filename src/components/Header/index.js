/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  FaHome,
  FaSignOutAlt,
  FaSignInAlt,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaChevronUp,
  FaChevronDown,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { Header, Nav, Form } from './styled';

export default function MainHeader() {
  const userIsAuthenticated = false;

  const menuHandleClick = () => {
    const menu = document.querySelector('.show-menu');
    const menuContainer = document.querySelector('.menu-container');

    if (!menu.classList.contains('hide')) {
      menu.classList.add('hide');
    }

    if (!menuContainer.classList.contains('show')) {
      menuContainer.classList.add('show');
      return;
    }

    menuContainer.classList.remove('show');
    menu.classList.remove('hide');
  };

  return (
    <Header>
      <div className="menu-container">
        <button className="close-menu" onClick={menuHandleClick} type="button">
          <FaChevronUp size={18} />
        </button>
      </div>
      <button type="button" className="show-menu">
        <FaChevronDown size={18} onClick={menuHandleClick} />
      </button>

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
          {userIsAuthenticated ? (
            <li>
              <Link to="#">
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

          {userIsAuthenticated ? (
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
