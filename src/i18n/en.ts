// Textos de la web en inglés. Es el idioma de referencia: los demás archivos (es.ts, de.ts…)
// tienen que tener exactamente esta misma forma (lo comprueba el tipo `Texts`).
export const APP_STORE_URL = 'https://apps.apple.com/app/id6801584392';

const en = {
  meta: {
    title: 'Tobokachi: Spaced Repetition Flashcards on Paper',
    description:
      'Tobokachi turns your daily spaced-repetition reviews into a printable PDF. Study vocabulary with a pen on paper, iPad or an e-ink tablet, then rate each card and let FSRS plan the next review. Free for iPhone and iPad.',
  },
  masthead: {
    facts: [
      { label: 'Languages', value: '22' },
      { label: 'Price', value: 'Free' },
      { label: 'Devices', value: 'iPhone · iPad' },
    ],
    // Las anclas (#how) llevan a la portada; el resto son páginas (support/)
    nav: [
      { label: 'How it works', href: '#how' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Support', href: 'support/' },
    ],
    cta: 'Get the app',
    language: 'Language',
  },
  hero: {
    kicker: 'A daily flashcard sheet · for iPhone and iPad',
    // El titular se arma así: titleStart + <em>titleOn</em> + titleCircled (rodeado a mano)
    titleStart: 'Spaced repetition, ',
    titleOn: 'on',
    titleCircled: 'paper.',
    lead:
      "Collect words on your phone. At the time you choose, Tobokachi builds a printable sheet with exactly the cards you're about to forget. Study it with a pen, rate each card back in the app, and FSRS plans the rest.",
    cta: 'Download on the App Store',
    note: 'Free · No account · No ads',
  },
  sheet: {
    ariaLabel:
      'A real Tobokachi study sheet: nine flashcards from Spanish to German, answered by hand in blue ink, with green check marks and red corrections.',
    caption: 'A real sheet: 22 Oct 2026, Spanish → German, answered by hand.',
    replay: 'Replay ↻',
  },
  how: {
    label: 'How it works',
    title: 'One sheet a day.<br><em>Five steps.</em>',
    intro:
      "The app does the scheduling. You do the remembering, the way it sticks: by writing. Then you tell the app how it went, and tomorrow's sheet adapts.",
    steps: [
      { title: 'Save words', text: 'From any app with the Share button, or right inside Tobokachi.' },
      { title: 'Make cards', text: 'A word and its translation, sorted into decks by topic.' },
      { title: 'Get the sheet', text: 'At your study time, FSRS picks only the cards due today and lays them out on a printable PDF.' },
      { title: 'Write', text: 'On paper, with Apple Pencil, or on your e-ink tablet. No screen, no notifications.' },
      { title: 'Rate it', text: '' },
    ],
    rate: {
      hint: 'Seen 10 days ago. Tap a face to see when it comes back.',
      names: ["I don't remember", 'Difficult', 'Good', 'Perfect'],
      // {name} y {when} se sustituyen; {n} es el número de días
      sentence: '{name} → back on your sheet in {when}.',
      one: '{n} day',
      other: '{n} days',
    },
  },
  why: {
    label: 'Why paper',
    title: 'Writing is<br><em>remembering.</em>',
    points: [
      {
        title: 'Recall, not recognition',
        text: 'To write a word you have to pull it out of your memory. Picking the right answer from a list only asks you to recognise it.',
      },
      {
        title: 'Nothing else on the page',
        text: 'A sheet of paper has no notifications, no streaks and no other app one swipe away.',
      },
      {
        title: 'A record you can see',
        text: "Doubts, crossed-out words, corrections in red: the sheet shows what you really know, and the app turns your ratings into tomorrow's plan.",
      },
    ],
    photoAlt:
      'An e-ink tablet showing a Tobokachi study sheet with ten German flashcards answered by hand with a stylus.',
    caption: 'Another real sheet, on an e-ink tablet and written with the stylus. 16 Oct 2026.',
  },
  features: {
    label: 'Inside the app',
    title: 'Everything for a<br><em>daily paper habit.</em>',
    // El pie de la portada de sesión del PDF, copiado tal cual del catálogo de la app
    note: 'Write the translation of each word on the next pages, then rate every card in the app.',
    items: [
      { title: '22 languages', text: 'Learning goals with your level and a daily limit for new cards and reviews.' },
      { title: 'Decks by topic', text: 'Irregular verbs, phrasal verbs, kanji, grammar: one deck for each thing you are working on.' },
      { title: 'FSRS scheduling', text: 'The modern open-source algorithm, also available in Anki, decides what goes on each sheet.' },
      { title: 'Printable PDFs', text: 'Clean A4 sheets with room to write, ready for any printer, iPad or e-ink tablet.' },
      { title: 'Daily reminder', text: "A notification at your study time when the day's sheet is ready." },
      { title: 'Save from anywhere', text: 'Share text from Safari or any other app straight into Tobokachi.' },
      { title: 'CSV import & export', text: 'Bring your cards from another app, or take them with you.' },
      { title: 'iCloud sync', text: 'Your decks on iPhone and iPad, synced through your own iCloud.' },
      { title: 'Private by design', text: 'No account, no ads, no tracking. Your cards stay on your devices and in your iCloud.' },
    ],
  },
  faq: {
    label: 'Questions',
    title: 'FAQ',
    more: 'Something else?',
    contact: 'Write to support →',
    items: [
      { q: 'Is Tobokachi free?', a: 'Yes. There are no ads, no subscriptions and no account to create.' },
      {
        q: 'Do I need a printer?',
        a: 'No. You can print the sheet, but you can also write on it with Apple Pencil on an iPad, or send it to an e-ink tablet.',
      },
      {
        q: 'Which e-ink tablets does it work with?',
        a: 'Any device that can open a PDF and let you write on it. Tobokachi creates a standard PDF that you can share or send to your tablet.',
      },
      {
        q: 'What is FSRS?',
        a: 'FSRS (Free Spaced Repetition Scheduler) is a modern algorithm that estimates when you are about to forget each card and schedules the review just before that moment. You only see the cards you need each day.',
      },
      {
        q: 'Why do I rate the cards in the app after studying on paper?',
        a: "The rating is how FSRS learns how well you know each card. It takes a few seconds per sheet, and it is what makes tomorrow's sheet contain the right cards.",
      },
      {
        q: 'Which languages can I learn?',
        a: '22 languages, including English, Spanish, German, French, Italian, Portuguese, Japanese, Chinese and Korean. The app interface is in English; your cards can be in any language.',
      },
      {
        q: 'Can I bring my cards from another app?',
        a: 'Yes. If your flashcard app can export a CSV file, you can import it into Tobokachi. You can also export your cards as CSV at any time.',
      },
      {
        q: 'What happens to my data?',
        a: 'Tobokachi collects no data. Your cards are stored on your device and synced through your own iCloud account.',
      },
    ],
  },
  footer: {
    ctaTitle: "Tomorrow's sheet<br><em>is waiting.</em>",
    ctaText: 'Free on the App Store for iPhone and iPad.',
    cta: 'Download on the App Store',
    legend: "🫠 · I don't remember  ·  🤔 · difficult  ·  😌 · good  ·  🤩 · perfect",
    links: [
      { label: 'Support', href: 'support/' },
      { label: 'Privacy', href: 'privacy/' },
    ],
    made: 'Made by Vanitcode, an indie developer who learns German with Tobokachi every day.',
    page: 'Page 1 / 1',
  },
  doc: { document: 'Document', updated: 'Updated', contact: 'Contact' },
};

export type Texts = typeof en;
export default en;
