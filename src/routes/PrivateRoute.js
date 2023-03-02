import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function PrivateRoute() {
  const location = useLocation();

  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? (
    <Navigate to="/login" state={{ from: location.pathname }} />
  ) : (
    <Outlet />
  );
}
