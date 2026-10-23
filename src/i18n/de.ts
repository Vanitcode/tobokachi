// Texte auf Deutsch. Gleiche Struktur wie en.ts (fehlt etwas, meldet sich TypeScript).
import type { Texts } from './en';

const de: Texts = {
  meta: {
    title: 'Tobokachi: Lernkarten zum Ausdrucken mit Spaced Repetition',
    description:
      'Tobokachi macht aus deinen täglichen Wiederholungen ein druckfertiges PDF. Lerne Vokabeln mit dem Stift auf Papier, auf dem iPad oder auf einem E-Ink-Tablet, bewerte jede Karte und lass FSRS die nächste Wiederholung planen. Kostenlos für iPhone und iPad.',
  },
  masthead: {
    facts: [
      { label: 'Sprachen', value: '22' },
      { label: 'Preis', value: 'Kostenlos' },
      { label: 'Geräte', value: 'iPhone · iPad' },
    ],
    nav: [
      { label: "So funktioniert's", href: '#how' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Support', href: 'support/' },
    ],
    cta: 'App laden',
    language: 'Sprache',
  },
  hero: {
    kicker: 'Ein Karteikarten-Blatt pro Tag · für iPhone und iPad',
    titleStart: 'Vokabeln lernen, ',
    titleOn: 'auf',
    titleCircled: 'Papier.',
    lead:
      'Sammle Wörter auf dem iPhone. Zu deiner Wunschzeit erstellt Tobokachi ein druckfertiges Blatt mit genau den Karten, die du bald vergessen würdest. Lern sie mit dem Stift, bewerte jede Karte in der App, und FSRS plant den Rest.',
    cta: 'Laden im App Store',
    note: 'Kostenlos · Kein Konto · Keine Werbung',
  },
  sheet: {
    ariaLabel:
      'Ein echtes Tobokachi-Lernblatt: neun Karteikarten von Spanisch nach Deutsch, von Hand in blauer Tinte beantwortet, mit grünen Haken und roten Korrekturen.',
    caption: 'Ein echtes Blatt: 22. Okt. 2026, Spanisch → Deutsch, von Hand ausgefüllt.',
    replay: 'Nochmal ↻',
  },
  how: {
    label: "So funktioniert's",
    title: 'Ein Blatt am Tag.<br><em>Fünf Schritte.</em>',
    intro:
      'Die App übernimmt die Planung. Du übernimmst das Erinnern, und zwar so, dass es hängen bleibt: durch Schreiben. Danach sagst du der App, wie es lief, und das Blatt von morgen passt sich an.',
    steps: [
      { title: 'Wörter sammeln', text: 'Aus jeder App über „Teilen“ oder direkt in Tobokachi.' },
      { title: 'Karten anlegen', text: 'Ein Wort und seine Übersetzung, nach Themen in Stapel sortiert.' },
      { title: 'Blatt erhalten', text: 'Zu deiner Lernzeit wählt FSRS nur die heute fälligen Karten aus und setzt sie auf ein druckfertiges PDF.' },
      { title: 'Schreiben', text: 'Auf Papier, mit dem Apple Pencil oder auf deinem E-Ink-Tablet. Kein Bildschirm, keine Mitteilungen.' },
      { title: 'Bewerten', text: '' },
    ],
    rate: {
      hint: 'Vor 10 Tagen gesehen. Tippe auf ein Gesicht, um zu sehen, wann sie wiederkommt.',
      names: ['Weiß ich nicht', 'Schwierig', 'Gut', 'Perfekt'],
      sentence: '{name} → wieder auf deinem Blatt in {when}.',
      one: '{n} Tag',
      other: '{n} Tagen',
    },
  },
  why: {
    label: 'Warum Papier',
    title: 'Schreiben heißt<br><em>behalten.</em>',
    points: [
      {
        title: 'Abrufen statt Wiedererkennen',
        text: 'Um ein Wort zu schreiben, musst du es aus dem Gedächtnis holen. Die richtige Antwort aus einer Liste zu wählen, verlangt nur, dass du sie wiedererkennst.',
      },
      {
        title: 'Nichts anderes auf der Seite',
        text: 'Ein Blatt Papier hat keine Mitteilungen, keine Streaks und keine andere App nur einen Wisch entfernt.',
      },
      {
        title: 'Ein sichtbares Protokoll',
        text: 'Zweifel, durchgestrichene Wörter, rote Korrekturen: Das Blatt zeigt, was du wirklich weißt, und die App macht aus deinen Bewertungen den Plan für morgen.',
      },
    ],
    photoAlt:
      'Ein E-Ink-Tablet mit einem Tobokachi-Lernblatt: zehn deutsche Karteikarten, mit dem Stift von Hand beantwortet.',
    caption: 'Ein weiteres echtes Blatt, auf einem E-Ink-Tablet mit dem Stift geschrieben. 16. Okt. 2026.',
  },
  features: {
    label: 'In der App',
    title: 'Alles für eine<br><em>tägliche Papier-Routine.</em>',
    items: [
      { title: '22 Sprachen', text: 'Lernziele mit deinem Niveau und einem Tageslimit für neue Karten und Wiederholungen.' },
      { title: 'Stapel nach Thema', text: 'Unregelmäßige Verben, Modalpartikeln, Kanji, Grammatik: ein Stapel für alles, woran du gerade arbeitest.' },
      { title: 'FSRS-Planung', text: 'Der moderne Open-Source-Algorithmus, den es auch in Anki gibt, entscheidet, was auf jedes Blatt kommt.' },
      { title: 'Druckfertige PDFs', text: 'Saubere A4-Blätter mit Platz zum Schreiben, für jeden Drucker, jedes iPad und jedes E-Ink-Tablet.' },
      { title: 'Tägliche Erinnerung', text: 'Eine Mitteilung zu deiner Lernzeit, sobald das Blatt des Tages bereit ist.' },
      { title: 'Von überall speichern', text: 'Teile Text aus Safari oder jeder anderen App direkt mit Tobokachi.' },
      { title: 'CSV-Import & -Export', text: 'Bring deine Karten aus einer anderen App mit oder nimm sie mit.' },
      { title: 'iCloud-Sync', text: 'Deine Stapel auf iPhone und iPad, synchronisiert über deine eigene iCloud.' },
      { title: 'Privat ab Werk', text: 'Kein Konto, keine Werbung, kein Tracking. Deine Karten bleiben auf deinen Geräten und in deiner iCloud.' },
    ],
  },
  faq: {
    label: 'Fragen',
    title: 'FAQ',
    more: 'Noch etwas?',
    contact: 'Schreib dem Support →',
    items: [
      { q: 'Ist Tobokachi kostenlos?', a: 'Ja. Keine Werbung, keine Abos und kein Konto.' },
      {
        q: 'Brauche ich einen Drucker?',
        a: 'Nein. Du kannst das Blatt ausdrucken, aber auch mit dem Apple Pencil auf dem iPad darauf schreiben oder es an ein E-Ink-Tablet schicken.',
      },
      {
        q: 'Mit welchen E-Ink-Tablets funktioniert es?',
        a: 'Mit jedem Gerät, das ein PDF öffnen kann und dich darauf schreiben lässt. Tobokachi erstellt ein normales PDF, das du teilen oder an dein Tablet senden kannst.',
      },
      {
        q: 'Was ist FSRS?',
        a: 'FSRS (Free Spaced Repetition Scheduler) ist ein moderner Algorithmus, der schätzt, wann du eine Karte bald vergessen würdest, und die Wiederholung kurz davor plant. So siehst du jeden Tag nur die Karten, die du brauchst.',
      },
      {
        q: 'Warum bewerte ich die Karten in der App, nachdem ich auf Papier gelernt habe?',
        a: 'Über die Bewertung erfährt FSRS, wie gut du jede Karte kannst. Das dauert ein paar Sekunden pro Blatt und sorgt dafür, dass morgen die richtigen Karten auf dem Blatt stehen.',
      },
      {
        q: 'Welche Sprachen kann ich lernen?',
        a: '22 Sprachen, darunter Englisch, Spanisch, Deutsch, Französisch, Italienisch, Portugiesisch, Japanisch, Chinesisch und Koreanisch. Die App selbst ist auf Englisch; deine Karten können in jeder Sprache sein.',
      },
      {
        q: 'Kann ich meine Karten aus einer anderen App übernehmen?',
        a: 'Ja. Wenn deine Karteikarten-App eine CSV-Datei exportieren kann, kannst du sie in Tobokachi importieren. Deine eigenen Karten kannst du jederzeit als CSV exportieren.',
      },
      {
        q: 'Was passiert mit meinen Daten?',
        a: 'Tobokachi erhebt keine Daten. Deine Karten werden auf deinem Gerät gespeichert und über dein eigenes iCloud-Konto synchronisiert.',
      },
    ],
  },
  footer: {
    ctaTitle: 'Das Blatt von morgen<br><em>wartet schon.</em>',
    ctaText: 'Kostenlos im App Store für iPhone und iPad.',
    cta: 'Laden im App Store',
    legend: '🫠 · weiß ich nicht  ·  🤔 · schwierig  ·  😌 · gut  ·  🤩 · perfekt',
    links: [
      { label: 'Support', href: 'support/' },
      { label: 'Datenschutz', href: 'privacy/' },
    ],
    made: 'Gemacht von Vanitcode, einem Indie-Entwickler, der jeden Tag mit Tobokachi Deutsch lernt.',
    page: 'Seite 1 / 1',
  },
  doc: { document: 'Dokument', updated: 'Aktualisiert', contact: 'Kontakt' },
};

export default de;
