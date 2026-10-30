// Antepone BASE_URL a los enlaces internos y archivos de public/. Hoy la web vive en la
// raíz (BASE_URL = '/'), pero así sigue funcionando si algún día vuelve a una subcarpeta.
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
