import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute() {
  const location = useLocation();
  const { isAuthenticated } = location.state || false;

  return !isAuthenticated ? (
    <Navigate to="/login" state={{ from: location.pathname }} />
  ) : (
    <Outlet />
  );
}
