import { createContext, useContext } from 'react';

interface ThemeContextInterface {
  theme: string;
  set: (newtheme: 'light' | 'dark') => void;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'light',
  set: (newtheme: 'light' | 'dark') => {
    console.warn(`set function not implemented. Tried to set theme to ${newtheme}`);
  },
  toggle: () => {
    console.warn('toggle function not implemented.');
  },
});

// This is a hack to get the displayName to show up in the React DevTools.
ThemeContext.displayName = 'ThemeContext';

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;
