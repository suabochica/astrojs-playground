import AndorraFlag from '@/components/flags/AndorraFlag.astro'
import SpainFlag from '@/components/flags/SpainFlag.astro'
import UnitedStatesFlag from '@/components/flags/UnitedStatesFlag.astro'

export const defaultLanguage = 'es';
export const showDefaultLanguage = false;

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

export const NAV_ITEMS = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.vota': 'Vota',
    'nav.info': 'Información',
    'nav.archivo': 'Archivo',
    'nav.legal': 'Aviso Legal',
    'nav.privacidad': 'Privacidad',
    'nav.cookies': 'Cookies',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.vota': 'Vote',
    'nav.info': 'Information',
    'nav.archivo': 'Archive',
    'nav.legal': 'Legal Notice',
    'nav.privacidad': 'Privacy',
    'nav.cookies': 'Cookies',
  },
  ca: {
    'nav.inicio': 'Inici',
    'nav.vota': 'Vota',
    'nav.info': 'Informació',
    'nav.archivo': 'Arxiu',
    'nav.legal': 'Avís Legal',
    'nav.privacidad': 'Privacitat',
    'nav.cookies': 'Cookies',
  },
} as const

export const ROUTES = {
  es: {
    vota: 'vota',
    info: 'info',
    archivo: 'archivo',
    'aviso-legal': 'aviso-legal',
    privacidad: 'privacidad',
    cookies: 'cookies',
  },
  en: {
    vota: 'vote',
    info: 'information',
    archivo: 'archive',
    'aviso-legal': 'legal-notice',
    privacidad: 'privacy',
    cookies: 'cookies',
  },
  ca: {
    vota: 'vota',
    info: 'informacio',
    archivo: 'arxiu',
    'aviso-legal': 'avis-legal',
    privacidad: 'privacitat',
    cookies: 'cookies',
  },
}