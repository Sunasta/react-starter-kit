import { useThemeContext } from '../../context/Theme';
import Sun from '../../assets/images/sun.svg?react';
import Moon from '../../assets/images/moon.svg?react';

const ThemeSwitch = () => {
  const { theme, toggle } = useThemeContext();
  return (
    <button type="button" aria-label="theme-button" onClick={toggle}>
      {theme === 'light' ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="dark:text-white" />
      )}
    </button>
  );
};

export default ThemeSwitch;
