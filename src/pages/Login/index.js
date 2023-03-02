import React, { useState } from 'react';

import { isEmail } from 'validator';

import { FaOpencart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import { Container, Form } from './styled';
import { manageToastNotification } from '../../utils/toast';

export default function Login() {
  const { loginUser, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      manageToastNotification('emai-error', toast.TYPE.ERROR);
      toast.error('Email is invalid. Please enter a valid email address', {
        toastId: 'email-error',
      });
      formErrors = true;
    }

    if (!formErrors) {
      loginUser({ email, password });
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
