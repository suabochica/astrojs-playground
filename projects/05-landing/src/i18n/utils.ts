import { NAV_ITEMS, defaultLanguage } from "./ui"

export function getLangFromUrl(url: URL) {
  const [ , lang ] = url.pathname.split('/')

  if (lang in NAV_ITEMS) {
    return lang as keyof typeof NAV_ITEMS
  }

  return defaultLanguage
}