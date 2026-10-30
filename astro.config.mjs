// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // La web vive en la raíz de su propio dominio (GitHub Pages con dominio personalizado).
  // La dirección antigua, https://vanitcode.github.io/tobokachi/, redirige aquí.
  site: 'https://tobokachi.app',
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

  // Sin tipografías descargadas: la web usa las mismas fuentes del sistema de Apple que el PDF
  // de la app (New York, SF Pro, SF Mono). Ver src/styles/global.css.
});
