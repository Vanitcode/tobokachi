// Idiomas de la web y utilidades para construir enlaces en cada uno.
// El inglés vive en la raíz (/tobokachi/) y el resto en una subcarpeta (/tobokachi/es/…).
import en from './en';
import es from './es';
import de from './de';
import fr from './fr';
import ja from './ja';
import { withBase } from '../lib/url';

export const LANGS = ['en', 'es', 'de', 'fr', 'ja'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

/** Nombre de cada idioma escrito en ese idioma, para el selector */
export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
};

/** Formato que usan las redes sociales (og:locale) */
export const OG_LOCALES: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
  fr: 'fr_FR',
  ja: 'ja_JP',
};

const TEXTS = { en, es, de, fr, ja };
export const getTexts = (lang: Lang) => TEXTS[lang];

/**
 * Ruta de una página en un idioma. `route` es la página sin idioma: '' (portada),
 * 'support/' o 'privacy/'. Ejemplo: localizedPath('es', 'support/') → '/tobokachi/es/support/'
 */
export function localizedPath(lang: Lang, route = ''): string {
  const prefix = lang === DEFAULT_LANG ? '' : `${lang}/`;
  return withBase(prefix + route);
}

/** Enlace del menú: las anclas (#faq) apuntan a la portada del idioma; el resto, a su página */
export function navHref(lang: Lang, href: string): string {
  return href.startsWith('#') ? `${localizedPath(lang)}${href}` : localizedPath(lang, href);
}
