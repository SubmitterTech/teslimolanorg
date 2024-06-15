import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token'); // Local storage'dan token kontrolü

  if (!token) {
    // Eğer token yoksa, kullanıcıyı giriş sayfasına yönlendir
    return <Navigate to="/giris" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;