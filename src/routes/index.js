import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import User from '../pages/User';
import Page404 from '../pages/Page404';

import PrivateRoute from './PrivateRoute';

export default function Routers() {
  const { isAuthenticated } = useSelector((state) => state.authReducer);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      {!isAuthenticated ? <Route path="/login" element={<Login />} /> : ''}
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<PrivateRoute />}>
        <Route path="/user" element={<User />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
