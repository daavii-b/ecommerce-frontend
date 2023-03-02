import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Section, Form } from './styled';
import { changePasswordFormValidator } from '../../utils/form/validators';
import { useAuth } from '../../context/auth';

export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (changePasswordFormValidator({ password, confirmPassword }).isValid) {
      console.log('isValid');
    }
  };

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Section>
      <header>
        <h2>Change your password</h2>
      </header>
      <Form
        onSubmit={handleSubmit}
        className="change-password-form"
        method="POST"
      >
        <input
          type="hidden"
          name="username"
          id="username"
          value={user.username}
        />
        <div className="field-container">
          <label className="field-label" htmlFor="password">
            Password:
            <input
              className="field-input"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            aria-label="Click to show the password"
            aria-pressed={showPassword}
            onClick={handleClick}
            type="button"
            className="show-password"
          >
            {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
        <div className="field-container">
          <label className="field-label" htmlFor="confirmPassword">
            Confirm Password:
            <input
              className="field-input"
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              autoComplete="on"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button
            aria-label="Click to show the password"
            aria-pressed={showPassword}
            onClick={handleClick}
            type="button"
            className="show-password"
          >
            {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>

        <button
          aria-label="Save the new password"
          className="submit-button"
          type="submit"
        >
          Save
        </button>
      </Form>
    </Section>
  );
}
