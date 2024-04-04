import { NAV_ITEMS, defaultLanguage, showDefaultLanguage, ROUTES } from "./ui"

export function getLangFromUrl(url: URL) {
  const [, language] = url.pathname.split('/')

  if (language in NAV_ITEMS) {
    return language as keyof typeof NAV_ITEMS
  }

  return defaultLanguage
}

export function useTranslations(language: keyof typeof NAV_ITEMS) {
  return function translate(key: keyof (typeof NAV_ITEMS)[typeof defaultLanguage]) { 
    return NAV_ITEMS[language][key] || NAV_ITEMS[defaultLanguage][key]
  }
}

export function useTranslatePath(language: keyof typeof NAV_ITEMS) {
  return function translatePath(path: string, lang: string = language) {
    const pathName = path.replaceAll('/', '')
    const hasTranslation =
      defaultLanguage !== lang &&
      (ROUTES[lang as keyof typeof ROUTES] as Record<string, string>)[pathName] !== undefined
    const translatePath = hasTranslation
      ? '/' + (ROUTES[lang as keyof typeof ROUTES] as Record<string, string>)[pathName]
      : path; 

    return !showDefaultLanguage && lang === defaultLanguage ? translatePath : `/${lang}${translatePath}`
  }
}