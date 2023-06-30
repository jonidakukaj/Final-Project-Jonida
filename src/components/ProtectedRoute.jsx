import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

  const ProtectedRoute = () => {
  const { user } = UserAuth();

  return !user ? <Navigate to="/login"/> : <Outlet/> 
};

export default ProtectedRoute;
