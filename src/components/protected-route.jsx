import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts';

const ProtectedRoute = () => {
  const { isAuthenticated, getUser } = useAuth();
  React.useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
