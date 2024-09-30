import { type ClassValue, clsx } from 'clsx';
import tailwindConfig from 'tailwind-config';
import { twMerge } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const { theme } = resolveConfig(tailwindConfig);
