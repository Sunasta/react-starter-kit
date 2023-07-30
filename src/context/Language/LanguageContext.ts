import React from 'react';

interface LanguageContextInterface {
  locale: string;
  set: (locale: string) => void;
}

export const supportedLanguages = ['fr', 'en', 'it', 'es', 'ru', 'ja'];

export const LanguageContext = React.createContext<LanguageContextInterface>({
  locale: 'fr',
  set: () => {},
});

// This is a hack to get the displayName to show up in the React DevTools.
LanguageContext.displayName = 'LanguageContext';

const useLanguageContext = () => React.useContext(LanguageContext);

export default useLanguageContext;
