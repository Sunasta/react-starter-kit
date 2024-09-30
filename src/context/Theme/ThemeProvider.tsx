import { useCallback, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');

  const set = useCallback((newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      set,
      toggle,
    }),
    [theme, set, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
