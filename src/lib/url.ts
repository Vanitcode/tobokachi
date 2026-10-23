// La web no está en la raíz del dominio sino en /tobokachi/, así que todos los
// enlaces internos y archivos de public/ tienen que llevar ese prefijo (BASE_URL).
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
