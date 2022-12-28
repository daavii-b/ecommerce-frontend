import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute() {
  const location = useLocation();

  const { isAuthenticated } =
    useSelector((state) => state.authReducer) || false;

  return !isAuthenticated ? (
    <Navigate to="/login" state={{ from: location.pathname }} />
  ) : (
    <Outlet />
  );
}
