import React from 'react';

import { Container } from './styled';
import { LoginForm } from '../../components/Forms';

export default function Login() {
  return (
    <Container>
      <LoginForm />
      <div className="account-actions">
        <p>
          <a
            aria-label="Click to redirect you to create an account page"
            href="/register"
          >
            Create an account
          </a>
        </p>
        <p>
          <a aria-label="Click to reset your password" href="/home">
            Reset password
          </a>
        </p>
      </div>
    </Container>
  );
}
