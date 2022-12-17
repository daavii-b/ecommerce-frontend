import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { FaOpencart } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container, Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const from = get(props, 'location.state.from', '/');

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

      dispatch(actions.loginRequest({ ...user, from }));
    }
  };

  return (
    <Container>
      <h1>
        E-commerce
        <span className="cart-icon">
          <FaOpencart size={34} />
        </span>
      </h1>
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
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
  );
}
