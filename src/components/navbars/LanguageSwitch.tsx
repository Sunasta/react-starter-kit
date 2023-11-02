import { supportedLanguages, useLanguageContext } from '../../context/Language';
import { languageNames } from '@/context/Language/LanguageContext';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const LanguageSwitch = () => {
  const { locale, set } = useLanguageContext();
  return (
    <>
      <Select value={locale} onValueChange={set}>
        <SelectTrigger className='cursor-pointer w-32 text-black dark:text-white border rounded'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className='border rounded w-[var(--radix-select-trigger-width)]'>
          <SelectGroup>
            {supportedLanguages.map((locale) => (
              <SelectItem key={locale} className='cursor-pointer text-neutral-800 data-[highlighted]:bg-neutral-100 dark:text-white dark:data-[highlighted]:bg-neutral-800' value={locale}>
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
