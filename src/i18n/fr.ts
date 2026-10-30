// Textes en français. Même structure que en.ts (s'il manque quelque chose, TypeScript le signale).
//   = espace insécable, obligatoire en français avant « : ? ! ; ».
import type { Texts } from './en';

const fr: Texts = {
  meta: {
    title: 'Tobokachi : fiches de vocabulaire à imprimer avec répétition espacée',
    description:
      'Tobokachi transforme vos révisions quotidiennes en un PDF à imprimer. Révisez votre vocabulaire au stylo, sur papier, sur iPad ou sur une tablette à encre électronique, notez chaque fiche et laissez FSRS planifier la prochaine révision. Gratuit pour iPhone et iPad.',
  },
  masthead: {
    facts: [
      { label: 'Langues', value: '22' },
      { label: 'Prix', value: 'Gratuit' },
      { label: 'Appareils', value: 'iPhone · iPad' },
    ],
    nav: [
      { label: 'Comment ça marche', href: '#how' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Assistance', href: 'support/' },
    ],
    cta: "Obtenir l'appli",
    language: 'Langue',
  },
  hero: {
    kicker: 'Une feuille de fiches par jour · pour iPhone et iPad',
    titleStart: 'La répétition espacée, ',
    titleOn: 'sur',
    titleCircled: 'papier.',
    lead:
      "Notez vos mots sur votre téléphone. À l'heure de votre choix, Tobokachi prépare une feuille à imprimer avec exactement les fiches que vous êtes sur le point d'oublier. Révisez-la au stylo, notez chaque fiche dans l'appli, et FSRS s'occupe du reste.",
    cta: "Télécharger dans l'App Store",
    note: 'Gratuit · Sans compte · Sans publicité',
  },
  sheet: {
    ariaLabel:
      "Une vraie feuille d'étude Tobokachi : neuf fiches de l'espagnol vers l'allemand, remplies à la main à l'encre bleue, avec des coches vertes et des corrections en rouge.",
    caption: 'Une vraie feuille : 22 oct. 2026, espagnol → allemand, remplie à la main.',
    replay: 'Rejouer ↻',
  },
  how: {
    label: 'Comment ça marche',
    title: 'Une feuille par jour.<br><em>Cinq étapes.</em>',
    intro:
      "L'appli s'occupe du planning. Vous vous occupez de retenir, de la manière qui marque : en écrivant. Ensuite, vous dites à l'appli comment ça s'est passé, et la feuille de demain s'adapte.",
    steps: [
      { title: 'Enregistrez des mots', text: "Depuis n'importe quelle appli avec le bouton Partager, ou directement dans Tobokachi." },
      { title: 'Créez des fiches', text: 'Un mot et sa traduction, rangés en paquets par thème.' },
      { title: 'Recevez la feuille', text: "À votre heure d'étude, FSRS choisit uniquement les fiches du jour et les met en page dans un PDF à imprimer." },
      { title: 'Écrivez', text: "Sur papier, avec l'Apple Pencil ou sur votre tablette à encre électronique. Sans écran, sans notifications." },
      { title: 'Notez-la', text: '' },
    ],
    rate: {
      hint: 'Vue il y a 10 jours. Touchez un visage pour voir quand elle revient.',
      names: ['Je ne sais plus', 'Difficile', 'Bien', 'Parfait'],
      sentence: '{name} → de retour sur votre feuille dans {when}.',
      one: '{n} jour',
      other: '{n} jours',
    },
  },
  why: {
    label: 'Pourquoi le papier',
    title: "Écrire, c'est<br><em>retenir.</em>",
    points: [
      {
        title: 'Se rappeler, pas reconnaître',
        text: 'Pour écrire un mot, il faut aller le chercher dans sa mémoire. Choisir la bonne réponse dans une liste demande seulement de la reconnaître.',
      },
      {
        title: "Rien d'autre sur la page",
        text: "Une feuille de papier n'a ni notifications, ni séries à entretenir, ni autre appli à portée de doigt.",
      },
      {
        title: 'Une trace visible',
        text: "Hésitations, mots barrés, corrections en rouge : la feuille montre ce que vous savez vraiment, et l'appli transforme vos notes en programme du lendemain.",
      },
    ],
    photoAlt:
      "Une tablette à encre électronique affichant une feuille d'étude Tobokachi : dix fiches d'allemand remplies à la main au stylet.",
    caption: 'Une autre vraie feuille, sur une tablette à encre électronique, écrite au stylet. 16 oct. 2026.',
  },
  features: {
    label: "Dans l'appli",
    title: 'Tout pour une<br><em>habitude quotidienne sur papier.</em>',
    note: 'Écrivez la traduction de chaque mot sur les pages suivantes, puis évaluez chaque fiche dans l’app.',
    items: [
      { title: '22 langues', text: 'Des objectifs avec votre niveau et une limite quotidienne de nouvelles fiches et de révisions.' },
      { title: 'Paquets par thème', text: 'Verbes irréguliers, phrasal verbs, kanji, grammaire : un paquet pour chaque point que vous travaillez.' },
      { title: 'Planning FSRS', text: "L'algorithme moderne et open source, également disponible dans Anki, décide de ce qui figure sur chaque feuille." },
      { title: 'PDF à imprimer', text: "Des feuilles A4 claires, avec de la place pour écrire, prêtes pour n'importe quelle imprimante, iPad ou tablette à encre électronique." },
      { title: 'Rappel quotidien', text: "Une notification à votre heure d'étude quand la feuille du jour est prête." },
      { title: 'Enregistrez depuis partout', text: "Partagez du texte depuis Safari ou n'importe quelle autre appli directement dans Tobokachi." },
      { title: 'Import et export CSV', text: "Récupérez vos fiches d'une autre appli, ou emportez-les avec vous." },
      { title: 'Synchronisation iCloud', text: 'Vos paquets sur iPhone et iPad, synchronisés avec votre propre iCloud.' },
      { title: 'Privée par conception', text: 'Sans compte, sans publicité, sans pistage. Vos fiches restent sur vos appareils et dans votre iCloud.' },
    ],
  },
  faq: {
    label: 'Questions',
    title: 'FAQ',
    more: 'Autre chose ?',
    contact: "Écrire à l'assistance →",
    items: [
      { q: 'Tobokachi est-il gratuit ?', a: "Oui. Pas de publicité, pas d'abonnement et pas de compte à créer." },
      {
        q: "Ai-je besoin d'une imprimante ?",
        a: "Non. Vous pouvez imprimer la feuille, mais aussi écrire dessus avec l'Apple Pencil sur un iPad, ou l'envoyer sur une tablette à encre électronique.",
      },
      {
        q: 'Avec quelles tablettes à encre électronique fonctionne-t-il ?',
        a: "Avec tout appareil capable d'ouvrir un PDF et de vous laisser écrire dessus. Tobokachi crée un PDF standard que vous pouvez partager ou envoyer sur votre tablette.",
      },
      {
        q: "Qu'est-ce que FSRS ?",
        a: "FSRS (Free Spaced Repetition Scheduler) est un algorithme moderne qui estime le moment où vous êtes sur le point d'oublier chaque fiche et programme la révision juste avant. Chaque jour, vous ne voyez que les fiches dont vous avez besoin.",
      },
      {
        q: "Pourquoi noter les fiches dans l'appli après avoir étudié sur papier ?",
        a: "C'est grâce à la note que FSRS apprend à quel point vous connaissez chaque fiche. Cela prend quelques secondes par feuille, et c'est ce qui permet à la feuille de demain de contenir les bonnes fiches.",
      },
      {
        q: 'Quelles langues puis-je apprendre ?',
        a: "22 langues, dont l'anglais, l'espagnol, l'allemand, le français, l'italien, le portugais, le japonais, le chinois et le coréen. L'interface de l'appli est en anglais ; vos fiches peuvent être dans n'importe quelle langue.",
      },
      {
        q: 'Puis-je importer mes fiches depuis une autre appli ?',
        a: "Oui. Si votre appli de flashcards peut exporter un fichier CSV, vous pouvez l'importer dans Tobokachi. Vous pouvez aussi exporter vos fiches en CSV à tout moment.",
      },
      {
        q: 'Que deviennent mes données ?',
        a: 'Tobokachi ne collecte aucune donnée. Vos fiches sont stockées sur votre appareil et synchronisées avec votre propre compte iCloud.',
      },
    ],
  },
  footer: {
    ctaTitle: 'La feuille de demain<br><em>vous attend.</em>',
    ctaText: "Gratuit sur l'App Store pour iPhone et iPad.",
    cta: "Télécharger dans l'App Store",
    legend: '🫠 · je ne sais plus  ·  🤔 · difficile  ·  😌 · bien  ·  🤩 · parfait',
    links: [
      { label: 'Assistance', href: 'support/' },
      { label: 'Confidentialité', href: 'privacy/' },
    ],
    made: "Fait par Vanitcode, un développeur indépendant qui apprend l'allemand avec Tobokachi chaque jour.",
    page: 'Page 1 / 1',
  },
  doc: { document: 'Document', updated: 'Mise à jour', contact: 'Contact' },
};

export default fr;
