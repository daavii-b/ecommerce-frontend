/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  FaHome,
  FaSignOutAlt,
  FaSignInAlt,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from 'react-icons/fa';

import { Header, Nav, Form } from './styled';

export default function MainHeader() {
  const userIsAuthenticated = false;

  return (
    <Header>
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
            <a href="#">
              <FaHome size={21} className="icons" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaShoppingCart size={21} className="icons" />
            </a>
          </li>
          {userIsAuthenticated ? (
            <li>
              <a href="#">
                <FaUser size={21} className="icons" />
              </a>
            </li>
          ) : (
            <li>
              <a href="#">
                <FaSignInAlt size={21} className="icons" />
              </a>
            </li>
          )}

          {userIsAuthenticated ? (
            <li>
              <a href="#">
                <FaSignOutAlt size={21} className="icons" />
              </a>
            </li>
          ) : (
            ''
          )}
        </ul>
      </Nav>
    </Header>
  );
}
