import React from 'react';

export default function Login() {
  return (
    <fieldset>
      <legend>Login</legend>

      <form action="#" method="POST">
        <label htmlFor="username">
          username
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
        </label>
        <label htmlFor="email">
          e-mail
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@gmail.com"
          />
        </label>
        <label htmlFor="password">
          password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <label htmlFor="password-confirmation">
          confirm password
          <input
            type="password-confirmation"
            name="password-confirmation"
            id="password-confirmation"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </fieldset>
  );
}
