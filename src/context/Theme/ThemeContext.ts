import { createContext, useContext } from 'react';

interface ThemeContextInterface {
  theme: string;
  set: (newtheme: 'light' | 'dark') => void;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'light',
  set: () => {},
  toggle: () => {},
});

// This is a hack to get the displayName to show up in the React DevTools.
ThemeContext.displayName = 'ThemeContext';

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;
