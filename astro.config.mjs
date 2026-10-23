// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // La web vive en https://vanitcode.github.io/tobokachi/ (GitHub Pages de un repositorio).
  // Si algún día hay dominio propio: site = 'https://tobokachi.app' y se borra `base`.
  site: 'https://vanitcode.github.io',
  base: '/tobokachi',
  // GitHub Pages sirve cada página como carpeta (…/support/): así no hay dos URL para lo mismo
  trailingSlash: 'always',

  integrations: [
    // El sitemap enlaza cada página con sus versiones en otros idiomas (hreflang)
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es', de: 'de', fr: 'fr', ja: 'ja' },
      },
    }),
  ],

  // Las tipografías se descargan al compilar y se sirven desde la propia web:
  // más rápido y sin mandar datos de los visitantes a Google Fonts.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Newsreader',
      cssVariable: '--font-serif',
      weights: ['300 800'],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-sans',
      weights: ['300 700'],
      styles: ['normal'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: ['400 700'],
      styles: ['normal'],
      fallbacks: ['Menlo', 'monospace'],
    },
  ],
});
