import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { isEmail } from 'lodash';
import { Form } from './styled';
import { useAuth } from '../../context/auth';

export function LoginForm() {
  const { loginUser } = useAuth();

  const schema = yup
    .object()
    .shape({
      email: yup.string().email(isEmail).required('E-mail is a required field'),
      password: yup
        .string()
        .required('Password is a required field')
        .min(8, 'Password must be at least 8 characters'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser({ email, password });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="login-form"
      method="POST"
    >
      <div className="field-container">
        <label className="field-label" htmlFor="email">
          <span>E-mail</span>
          <input
            id="email"
            type="email"
            placeholder="Type your e-mail address"
            className="field-input"
            {...register('email', {})}
          />
        </label>
        {errors.email && <p role="alert">{errors.email?.message}</p>}
      </div>

      <div className="field-container">
        <label className="field-label" htmlFor="password">
          <span>Password</span>
          <input
            id="password"
            type="password"
            placeholder="Type your password"
            className="field-input"
            {...register('password')}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
        </label>
        {errors.password && <p role="alert">{errors.password?.message}</p>}
      </div>

      <button type="submit">Login</button>
    </Form>
  );
}
