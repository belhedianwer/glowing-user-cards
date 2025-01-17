import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme] = useState('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
  }, []);

  return { theme };
};