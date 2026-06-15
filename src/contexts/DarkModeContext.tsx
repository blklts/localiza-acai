'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext({
  dark: false,
  toggle: () => {},
  daltonism: false,
  toggleDaltonism: () => {},
});

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [daltonism, setDaltonism] = useState(false);

  useEffect(() => {
    const savedDark = localStorage.getItem('darkMode') === 'true';
    setDark(savedDark);
    document.documentElement.classList.toggle('dark', savedDark);

    const savedDaltonism = localStorage.getItem('daltonism') === 'true';
    setDaltonism(savedDaltonism);
    document.documentElement.classList.toggle('daltonism', savedDaltonism);
  }, []);

  const toggle = () => {
    setDark(prev => {
      const next = !prev;
      localStorage.setItem('darkMode', String(next));
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  const toggleDaltonism = () => {
    setDaltonism(prev => {
      const next = !prev;
      localStorage.setItem('daltonism', String(next));
      document.documentElement.classList.toggle('daltonism', next);
      return next;
    });
  };

  return (
    <DarkModeContext.Provider value={{ dark, toggle, daltonism, toggleDaltonism }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
