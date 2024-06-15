import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const { logout } = useAuth(); // logout fonksiyonunu kullan
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Oturumu kapatır
    navigate("/");
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="lg:hidden focus:outline-none mr-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <h1 className="text-xl font-bold">Yönetici Paneli</h1>
      </div>
      <div>
        <span>Admin</span>
        {/* Çıkış Butonu */}
        <button
          onClick={handleLogout}
          className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          Çıkış
        </button>
      </div>
    </header>
  );
};

export default Header;