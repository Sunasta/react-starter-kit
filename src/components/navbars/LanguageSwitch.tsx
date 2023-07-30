import { supportedLanguages, useLanguageContext } from '../../context/Language';

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
          <option className="text-black dark:text-white hover:cursor-pointer" value={locale} key={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageSwitch;
