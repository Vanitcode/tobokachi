// Textos en español. Misma forma que en.ts (si falta algo, TypeScript avisa).
import type { Texts } from './en';

const es: Texts = {
  meta: {
    title: 'Tobokachi: tarjetas de vocabulario para imprimir con repetición espaciada',
    description:
      'Tobokachi convierte tus repasos diarios de repetición espaciada en un PDF para imprimir. Estudia vocabulario con boli en papel, en el iPad o en una tablet de tinta electrónica, valora cada tarjeta y deja que FSRS planifique el siguiente repaso. Gratis para iPhone y iPad.',
  },
  masthead: {
    facts: [
      { label: 'Idiomas', value: '22' },
      { label: 'Precio', value: 'Gratis' },
      { label: 'Dispositivos', value: 'iPhone · iPad' },
    ],
    nav: [
      { label: 'Cómo funciona', href: '#how' },
      { label: 'Preguntas', href: '#faq' },
      { label: 'Soporte', href: 'support/' },
    ],
    cta: 'Descargar',
    language: 'Idioma',
  },
  hero: {
    kicker: 'Una hoja de tarjetas al día · para iPhone y iPad',
    titleStart: 'Repetición espaciada, ',
    titleOn: 'en',
    titleCircled: 'papel.',
    lead:
      'Guarda palabras en el móvil. A la hora que elijas, Tobokachi prepara una hoja para imprimir con exactamente las tarjetas que estás a punto de olvidar. Estúdiala con boli, valora cada tarjeta en la app y FSRS planifica el resto.',
    cta: 'Descárgalo en el App Store',
    note: 'Gratis · Sin cuenta · Sin anuncios',
  },
  sheet: {
    ariaLabel:
      'Una hoja de estudio real de Tobokachi: nueve tarjetas de español a alemán, respondidas a mano en tinta azul, con ticks verdes y correcciones en rojo.',
    caption: 'Una hoja real: 22 oct 2026, español → alemán, respondida a mano.',
    replay: 'Repetir ↻',
  },
  how: {
    label: 'Cómo funciona',
    title: 'Una hoja al día.<br><em>Cinco pasos.</em>',
    intro:
      'La app se encarga de planificar. Tú te encargas de recordar, de la forma que se queda: escribiendo. Luego le cuentas a la app cómo te ha ido y la hoja de mañana se adapta.',
    steps: [
      { title: 'Guarda palabras', text: 'Desde cualquier app con el botón Compartir, o directamente en Tobokachi.' },
      { title: 'Crea tarjetas', text: 'Una palabra y su traducción, ordenadas en mazos por tema.' },
      { title: 'Recibe la hoja', text: 'A tu hora de estudio, FSRS elige solo las tarjetas que tocan hoy y las coloca en un PDF para imprimir.' },
      { title: 'Escribe', text: 'En papel, con el Apple Pencil o en tu tablet de tinta electrónica. Sin pantalla, sin notificaciones.' },
      { title: 'Valórala', text: '' },
    ],
    rate: {
      hint: 'Vista hace 10 días. Toca una cara para ver cuándo vuelve.',
      names: ['No me acuerdo', 'Difícil', 'Bien', 'Perfecto'],
      sentence: '{name} → vuelve a tu hoja en {when}.',
      one: '{n} día',
      other: '{n} días',
    },
  },
  why: {
    label: 'Por qué en papel',
    title: 'Escribir es<br><em>recordar.</em>',
    points: [
      {
        title: 'Recordar, no reconocer',
        text: 'Para escribir una palabra tienes que sacarla de tu memoria. Elegir la respuesta correcta de una lista solo te pide reconocerla.',
      },
      {
        title: 'Nada más en la página',
        text: 'Una hoja de papel no tiene notificaciones, ni rachas, ni otra app a un deslizamiento de distancia.',
      },
      {
        title: 'Un registro que se ve',
        text: 'Dudas, palabras tachadas, correcciones en rojo: la hoja muestra lo que de verdad sabes, y la app convierte tus valoraciones en el plan de mañana.',
      },
    ],
    photoAlt:
      'Una tablet de tinta electrónica con una hoja de estudio de Tobokachi: diez tarjetas de alemán respondidas a mano con el lápiz.',
    caption: 'Otra hoja real, en una tablet de tinta electrónica y escrita con el lápiz. 16 oct 2026.',
  },
  features: {
    label: 'Dentro de la app',
    title: 'Todo para un<br><em>hábito diario en papel.</em>',
    note: 'Escribe la traducción de cada palabra en las páginas siguientes y luego valora cada tarjeta en la app.',
    items: [
      { title: '22 idiomas', text: 'Objetivos con tu nivel y un límite diario de tarjetas nuevas y repasos.' },
      { title: 'Mazos por tema', text: 'Verbos irregulares, phrasal verbs, kanji, gramática: un mazo para cada cosa que estés trabajando.' },
      { title: 'Planificación FSRS', text: 'El algoritmo moderno y de código abierto, también disponible en Anki, decide qué va en cada hoja.' },
      { title: 'PDF para imprimir', text: 'Hojas A4 limpias con espacio para escribir, listas para cualquier impresora, iPad o tablet de tinta electrónica.' },
      { title: 'Recordatorio diario', text: 'Un aviso a tu hora de estudio cuando la hoja del día está lista.' },
      { title: 'Guarda desde cualquier sitio', text: 'Comparte texto desde Safari o cualquier otra app directamente a Tobokachi.' },
      { title: 'Importa y exporta CSV', text: 'Trae tus tarjetas de otra app o llévatelas contigo.' },
      { title: 'Sincronización con iCloud', text: 'Tus mazos en el iPhone y el iPad, sincronizados con tu propio iCloud.' },
      { title: 'Privada por diseño', text: 'Sin cuenta, sin anuncios, sin rastreo. Tus tarjetas se quedan en tus dispositivos y en tu iCloud.' },
    ],
  },
  faq: {
    label: 'Preguntas',
    title: 'Preguntas frecuentes',
    more: '¿Algo más?',
    contact: 'Escribe a soporte →',
    items: [
      { q: '¿Tobokachi es gratis?', a: 'Sí. No hay anuncios, ni suscripciones, ni cuenta que crear.' },
      {
        q: '¿Necesito una impresora?',
        a: 'No. Puedes imprimir la hoja, pero también puedes escribir encima con el Apple Pencil en un iPad o enviarla a una tablet de tinta electrónica.',
      },
      {
        q: '¿Con qué tablets de tinta electrónica funciona?',
        a: 'Con cualquier dispositivo que pueda abrir un PDF y te deje escribir encima. Tobokachi crea un PDF estándar que puedes compartir o enviar a tu tablet.',
      },
      {
        q: '¿Qué es FSRS?',
        a: 'FSRS (Free Spaced Repetition Scheduler) es un algoritmo moderno que estima cuándo estás a punto de olvidar cada tarjeta y programa el repaso justo antes. Cada día ves solo las tarjetas que necesitas.',
      },
      {
        q: '¿Por qué valoro las tarjetas en la app después de estudiar en papel?',
        a: 'La valoración es lo que le dice a FSRS lo bien que te sabes cada tarjeta. Son unos segundos por hoja, y es lo que hace que la hoja de mañana tenga las tarjetas adecuadas.',
      },
      {
        q: '¿Qué idiomas puedo aprender?',
        a: '22 idiomas, entre ellos inglés, español, alemán, francés, italiano, portugués, japonés, chino y coreano. La interfaz de la app está en inglés; tus tarjetas pueden estar en cualquier idioma.',
      },
      {
        q: '¿Puedo traer mis tarjetas de otra app?',
        a: 'Sí. Si tu app de flashcards puede exportar un archivo CSV, puedes importarlo en Tobokachi. También puedes exportar tus tarjetas en CSV cuando quieras.',
      },
      {
        q: '¿Qué pasa con mis datos?',
        a: 'Tobokachi no recoge ningún dato. Tus tarjetas se guardan en tu dispositivo y se sincronizan con tu propia cuenta de iCloud.',
      },
    ],
  },
  footer: {
    ctaTitle: 'La hoja de mañana<br><em>te está esperando.</em>',
    ctaText: 'Gratis en el App Store para iPhone y iPad.',
    cta: 'Descárgalo en el App Store',
    legend: '🫠 · no me acuerdo  ·  🤔 · difícil  ·  😌 · bien  ·  🤩 · perfecto',
    links: [
      { label: 'Soporte', href: 'support/' },
      { label: 'Privacidad', href: 'privacy/' },
    ],
    made: 'Hecho por Vanitcode, un desarrollador indie que aprende alemán con Tobokachi cada día.',
    page: 'Página 1 / 1',
  },
  doc: { document: 'Documento', updated: 'Actualizado', contact: 'Contacto' },
};

export default es;
