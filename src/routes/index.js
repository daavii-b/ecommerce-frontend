import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import User from '../pages/User';
import Page404 from '../pages/Page404';
import Cart from '../pages/Cart';

import PrivateRoute from './PrivateRoute';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/user" element={<PrivateRoute />}>
        <Route path="/user" element={<User />} />
      </Route>
      <Route path="/cart" element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
