import React from 'react';
import { LanguageContext, supportedLanguages } from './LanguageContext';
import { IntlProvider, MessageFormatElement } from 'react-intl';
import browserLang from 'browser-lang';

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = React.useState('fr');
  const [messages, setMessages] = React.useState<
    Record<string, string> | Record<string, MessageFormatElement[]> | undefined
  >(undefined);
  const [isLoadingLocale, setIsLoadingLocale] = React.useState(true);

  const defaultLocale = browserLang({
    languages: supportedLanguages as unknown as string[],
    fallback: 'en',
  });

  React.useEffect(() => {
    setLocale(defaultLocale);
  }, [defaultLocale, setLocale]);

  React.useEffect(() => {
    const url = `https://api.i18nexus.com/project_resources/translations/${locale}/default.json?api_key=${import.meta.env.VITE_I18NEXUS_API_KEY}`;
    const options = {
      method: 'GET',
      headers: { 'Accept-Encoding': 'gzip, deflate, br' },
    }
    const fetchLocale = async () => {
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
    }
    fetchLocale();
    const htmlEl = document.getElementsByTagName('html');
    if (htmlEl && htmlEl[0]) {
      htmlEl[0].setAttribute('lang', locale);
    }
  }, [locale]);

  const setLanguage = React.useCallback(
    (newLanguage: string) => {
      setLocale(newLanguage);
    },
    [setLocale],
  );

  const value = React.useMemo(
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
