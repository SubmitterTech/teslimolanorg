import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from './context/ProtectedRoute';
import { AuthProvider } from './context/AuthContext'; // Yolun doğru olduğundan emin olun

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

reportWebVitals();
