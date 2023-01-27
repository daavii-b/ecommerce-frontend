import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { isEmail } from 'validator';

import { FaOpencart } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container, Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';

export default function Login() {
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const location = useLocation();
  const { from } = location.state || '/user';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      toast.error('Email is invalid. Please enter a valid email address');
      formErrors = true;
    }

    if (!formErrors) {
      const user = {
        email,
        password,
      };

      dispatch(
        globalActions.dispatchAction(actions.loginRequest, { user, from })
      );
    }
  };

  return !isAuthenticated ? (
    <Container>
      <h2 translate="no">
        E-commerce
        <span className="cart-icon">
          <FaOpencart size={34} />
        </span>
      </h2>
      <hr />
      <Form
        onSubmit={handleSubmit}
        className="login-form"
        action="#"
        method="POST"
      >
        <label className="field-label" htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="field-label" htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
          />
        </label>
        <button type="submit">Login</button>
      </Form>

      <div className="create-account">
        <p>
          <a href="/register">Create an account</a>
        </p>
      </div>
    </Container>
  ) : (
    <Container>
      <h2>You are authenticated</h2>
    </Container>
  );
}
