import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { languageNames, supportedLanguages, useLanguageContext } from '@/context/Language';

const LanguageSwitch = () => {
  const { locale, set } = useLanguageContext();
  return (
    <>
      <Select value={locale} onValueChange={set}>
        <SelectTrigger className="cursor-pointer w-32 text-black dark:text-white border rounded">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="border rounded w-[var(--radix-select-trigger-width)]">
          <SelectGroup>
            {supportedLanguages.map((locale) => (
              <SelectItem
                key={locale}
                className="cursor-pointer text-slate-800 data-[highlighted]:bg-slate-100 dark:text-white dark:data-[highlighted]:bg-slate-800"
                value={locale}
              >
                {languageNames[locale]}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default LanguageSwitch;
