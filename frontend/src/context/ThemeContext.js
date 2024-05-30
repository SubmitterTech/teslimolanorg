import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Yerel depolamadan kullanıcı tercihini yükleyin
    const userPref = localStorage.getItem('darkMode');
    if (userPref !== null) {
      return JSON.parse(userPref);
    }
    // Sistem tercihine göre varsayılan temayı belirleyin
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPref;
  });

  useEffect(() => {
    // Tema değişikliğinde yerel depolamayı güncelleyin
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
