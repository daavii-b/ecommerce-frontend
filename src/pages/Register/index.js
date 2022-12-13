/* eslint-disable no-console */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import { Container } from './styled';
import axios from '../../services/axios';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const usernameIsValid = () => !(username.length < 3 || username.length > 255);

  const passwordIsValid = () => password.length > 8;

  const passwordIsEqual = () => password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!usernameIsValid()) {
      toast.error('Username must have at least 3 characters');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Email is invalid. Please enter a valid email address');
      formErrors = true;
    }

    if (!passwordIsValid()) {
      toast.error('Password must have at least 8 characters');
      formErrors = true;
    }

    if (!passwordIsEqual()) {
      toast.error('Password don`t match');
      formErrors = true;
    }

    if (!formErrors) {
      const user = {
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        password,
      };

      try {
        await axios.post('/users', { ...user });

        toast.success('You were registered successfully');
      } catch (error) {
        const status = get(error, 'response.status');
        const errors = [get(error, 'response.data')];
        console.log(error, status, errors);

        return false;
      }
    }

    return navigate('/');
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="register-form"
        action="#"
        method="POST"
      >
        <div className="field-group">
          <label htmlFor="first name">
            first name
            <input
              type="text"
              name="first name"
              id="first name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => toast.info('First name is optionally.')}
            />
          </label>
        </div>
        <div className="field-group">
          <label htmlFor="last name">
            last name
            <input
              type="text"
              name="last name"
              id="last name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => toast.info('Last name is optionally.')}
            />
          </label>
        </div>
        <div className="field-group">
          <label htmlFor="username">
            username
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="field-group">
          <label htmlFor="email">
            e-mail
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="field-group">
          <label htmlFor="password">
            password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="field-group">
          <label htmlFor="password-confirmation">
            Password
            <input
              type="password"
              name="password-confirmation"
              id="password-confirmation"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </Container>
  );
}