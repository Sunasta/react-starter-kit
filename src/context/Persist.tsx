import React from 'react';
import { useCookies } from 'react-cookie';
import { useLanguageContext } from './Language';
import { useThemeContext } from './Theme';

/** *************> Persist
 * @remarks
 * Persist the language and theme contexts to local storage or cookies.
 *
 * @param {React.ReactNode} children - The children to render.
 * @param {string} mode - The mode to use for persisting the contexts (default local).
 * @returns {React.ReactNode} - The children.
 */

interface ComponentProps {
  /** The children to render. */
  children: React.ReactNode;
  /** The mode to use for persisting the contexts (default local). */
  mode?: 'local' | 'cookie';
}

const Persist = ({ children, mode = 'local' }: ComponentProps) => {
  const [hydrated, setHydrated] = React.useState(false);
  const languageContext = useLanguageContext();
  const themeContext = useThemeContext();
  const [cookies, setCookies] = useCookies(['language', 'theme']);

  React.useEffect(() => {
    if (hydrated) return;
    languageContext.set(mode === 'cookie' ? cookies.language : localStorage.language || 'fr');
    themeContext.set(mode === 'cookie' ? cookies.theme : localStorage.theme || 'light');
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!hydrated) return;
    if (mode === 'local') {
      localStorage.language = languageContext.locale;
      localStorage.theme = themeContext.theme;
      return;
    } else if (mode === 'cookie') {
      setCookies('language', languageContext.locale, { path: '/' });
      setCookies('theme', themeContext.theme, { path: '/' });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, languageContext.locale, themeContext.theme]);
  return <>{children}</>;
};

export default Persist;
