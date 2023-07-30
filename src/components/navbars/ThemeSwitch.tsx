import { useThemeContext } from '../../context/Theme';
import { ReactComponent as Sun } from '../../assets/images/sun.svg';
import { ReactComponent as Moon } from '../../assets/images/moon.svg';

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
