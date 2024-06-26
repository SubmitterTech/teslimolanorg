import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from './context/ProtectedRoute';
import { AuthProvider } from './context/AuthContext'; // Yolun doğru olduğundan emin olun
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/admin/*" element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }  />
      </Routes>
    </Router>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
