import AndorraFlag from '@/components/flags/AndorraFlag.astro'
import SpainFlag from '@/components/flags/SpainFlag.astro'
import UnitedStatesFlag from '@/components/flags/UnitedStatesFlag.astro'

export const defaultLanguage = 'es';

export const LANGUAGES: Record<string, { code: string; name: string; flag: typeof SpainFlag }> = {
  ca: {
    code: 'ca',
    name: 'Català',
    flag: AndorraFlag
  },
  en: {
    code: 'en',
    name: 'English',
    flag: UnitedStatesFlag
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag
  }
};
