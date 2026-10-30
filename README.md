# Tobokachi web

Web de producto de [Tobokachi](https://apps.apple.com/app/id6801584392), hecha con Astro.
Se publica en https://tobokachi.app/

## Trabajar en local

```bash
nvm use          # usa Node 24 (lo indica .nvmrc)
npm install
npm run dev      # http://localhost:4321/tobokachi/
npm run build    # genera la web en dist/
```

## Estructura

- `src/i18n/en.ts`: todos los textos (luego habrá es, de, fr, ja).
- `src/styles/global.css`: colores, tipografías y espaciados del estilo «Hoja de estudio».
- `src/layouts/Base.astro`: el `<head>` con todo lo de SEO.
- `src/components/`: cabecera, portada, botón de la App Store…
- `style-tiles/`: las pruebas de diseño. No se publican.
