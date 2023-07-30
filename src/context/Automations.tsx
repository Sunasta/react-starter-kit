import React from 'react';
import { useLanguageContext } from './Language';
import { useThemeContext } from './Theme';

type ComponentProps = {
  children: React.ReactNode;
};

function Automations({ children }: ComponentProps) {
  const { locale } = useLanguageContext();
  const { theme } = useThemeContext();

  React.useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  React.useEffect(() => {
    document.documentElement.classList[theme === 'light' ? 'remove' : 'add']('dark');
  }, [theme]);
  return <>{children}</>;
}

export default Automations;
