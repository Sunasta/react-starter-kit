import browserLang from 'browser-lang';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { IntlProvider, type MessageFormatElement } from 'react-intl';
import { LanguageContext, supportedLanguages } from './LanguageContext';

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState('fr');
  const [messages, setMessages] = useState<Record<string, string> | Record<string, MessageFormatElement[]> | undefined>(
    undefined,
  );
  const [isLoadingLocale, setIsLoadingLocale] = useState(true);

  const defaultLocale = browserLang({
    languages: supportedLanguages as unknown as string[],
    fallback: 'en',
  });

  useEffect(() => {
    setLocale(defaultLocale);
  }, [defaultLocale]);

  useEffect(() => {
    const url = `https://api.i18nexus.com/project_resources/translations/${locale}/default.json?api_key=${import.meta.env.VITE_I18NEXUS_API_KEY}`;
    const options = {
      method: 'GET',
      headers: { 'Accept-Encoding': 'gzip, deflate, br' },
    };
    (async () => {
      await fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch translations');
          }
          return response.json();
        })
        .then((data) => {
          setMessages(data);
          setIsLoadingLocale(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoadingLocale(false);
        });
    })();
    const htmlEl = document.getElementsByTagName('html');
    if (htmlEl && htmlEl[0]) {
      htmlEl[0].setAttribute('lang', locale);
    }
  }, [locale]);

  const setLanguage = useCallback((newLanguage: string) => {
    setLocale(newLanguage);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      set: setLanguage,
    }),
    [locale, setLanguage],
  );

  if (isLoadingLocale) {
    return <div>Loading Locales...</div>;
  }

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
