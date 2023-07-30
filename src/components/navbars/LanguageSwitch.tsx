import { supportedLanguages, useLanguageContext } from '../../context/Language';
import { ReactCountryFlag } from 'react-country-flag';

const LanguageSwitch = () => {
  const { locale, set } = useLanguageContext();
  return (
    <>
      <select
        className="text-black dark:text-white bg-slate-500 hover:cursor-pointer rounded-md p-2"
        defaultValue={locale}
        onChange={(event) => set(event.target.value)}
      >
        {supportedLanguages.map((locale) => (
          <option className="flex text-black dark:text-white hover:cursor-pointer" value={locale} key={locale}>
            <ReactCountryFlag
              className="emojiFlag"
              countryCode={locale.toUpperCase()}
              aria-label={`${locale} flag`}
              style={{
                fontSize: '2em',
                lineHeight: '2em',
              }}
              svg
            />
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageSwitch;
