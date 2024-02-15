import { useThemeContext } from '../context/Theme';
import Sun from '@/assets/images/sun.svg?react';
import Moon from '@/assets/images/moon.svg?react';
import { Button } from '@/components/ui/button';

const ThemeSwitch = () => {
  const { theme, toggle } = useThemeContext();
  return (
    <Button variant='ghost' size='icon' type="button" aria-label="theme-button" onClick={toggle}>
      {{ light: <Sun />, dark: <Moon className="dark:text-white" /> }[theme]}
    </Button>
  );
};

export default ThemeSwitch;
