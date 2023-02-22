import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Register from '../pages/Register';
import User from '../pages/User';
import Page404 from '../pages/Page404';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import PaymentStatus from '../pages/PaymentStatus';
import PrivateRoute from './PrivateRoute';
import ChangePassword from '../pages/ChangePassword';

export default function Routers() {
  return (
    <Routes>
      {/* Public Routes  */}
      <Route path="/" element={<Home />} />
      <Route path="/product/:productSlug" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PrivateRoutes */}
      <Route path="/users" element={<PrivateRoute />}>
        <Route path="/users" element={<User />} />
        <Route path="/users/change-password" element={<ChangePassword />} />
      </Route>

      <Route path="/cart" element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route path="/payments" element={<PrivateRoute />}>
        <Route path="/payments" element={<Payment />} />
        <Route path="/payments/status/" element={<PaymentStatus />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
