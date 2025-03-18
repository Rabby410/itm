import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const authToken = localStorage.getItem('auth_token'); // Check if the token exists
  return authToken ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
