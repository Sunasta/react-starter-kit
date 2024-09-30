import { useEffect, useState } from 'react';
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
  const [hydrated, setHydrated] = useState(false);
  const languageContext = useLanguageContext();
  const themeContext = useThemeContext();
  const [cookies, setCookies] = useCookies(['language', 'theme']);

  useEffect(() => {
    if (hydrated) return;
    languageContext.set(mode === 'cookie' ? cookies.language : localStorage.language || 'fr');
    themeContext.set(mode === 'cookie' ? cookies.theme : localStorage.theme || 'light');
    setHydrated(true);
  }, [hydrated, cookies.language, cookies.theme, mode, languageContext, themeContext]);

  useEffect(() => {
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
  }, [hydrated, languageContext.locale, themeContext.theme, mode, setCookies]);
  return <>{children}</>;
};

export default Persist;
