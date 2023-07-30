import React from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState('light');

  const set = React.useCallback(
    (newTheme: 'light' | 'dark') => {
      setTheme(newTheme);
    },
    [setTheme],
  );

  const toggle = React.useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  const value = React.useMemo(
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
