import { createContext, useContext } from 'react';

interface LanguageContextInterface {
  locale: string;
  set: (locale: string) => void;
}

export const supportedLanguages = ['fr', 'en', 'it', 'es', 'ru', 'ja', 'ar'] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageNames: Record<SupportedLanguage, string> = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
  es: 'Español',
  ru: 'Русский',
  ja: '日本語',
  ar: 'العربية',
};

export const LanguageContext = createContext<LanguageContextInterface>({
  locale: 'fr',
  set: () => {},
});

// This is a hack to get the displayName to show up in the React DevTools.
LanguageContext.displayName = 'LanguageContext';

const useLanguageContext = () => useContext(LanguageContext);

export default useLanguageContext;
