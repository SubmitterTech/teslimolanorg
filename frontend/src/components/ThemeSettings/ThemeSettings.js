import React, { useState, useEffect } from 'react';

const ThemeSettings = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {darkMode ? 'Koyu Tema' : 'Açık Tema'}
        </h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-full bg-blue-500 text-white dark:bg-yellow-500"
        >
          Temayı Değiştir
        </button>
      </div>
    </div>
  );
};

export default ThemeSettings;
