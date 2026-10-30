# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people learning a language who learn by writing by hand (kanji and Japanese, German, any language where producing the word fixes it better than recognising it), and who are tired of studying on a screen. They want spaced repetition without giving up pen and paper. E-ink tablet owners (reMarkable and similar) and Leitner-box users are part of this group, not a separate audience.

The maintainer is also a user (learning German with the app on Twitch streams); that daily use is the main source of product feedback.

## Product Purpose

Tobokachi brings spaced repetition to paper. The user collects words, turns them into cards (original + translation), and every day, at the time they choose, the app builds that day's study queue with FSRS and exports it as a printable PDF worksheet. They study it by hand (printed, with Apple Pencil, or on an e-ink tablet), then come back to the app and rate each card so FSRS schedules the next review.

Success: the user studies on paper every day, rates the sheet, and their reviews stay on schedule.

## Positioning

Spaced repetition on paper. Screen-first SRS apps (Anki, Quizlet…) keep the study on the screen, and printing from them breaks the intervals; print-flashcard apps print without scheduling; handwriting flashcard apps keep you inside the app. Tobokachi is the only one where the paper sheet *is* the study session and the app exists to prepare it and record the result. Avoid the "PDF to flashcards" search intent: that is the opposite product.

## Operating Context

- Daily ritual: reminder at the chosen time → generate today's worksheet(s) → study away from the app with a pen → return later (possibly days later, possibly on another device) to rate each card.
- Worksheets travel to Markup, Files, printers and e-ink tablets through the share sheet; there are separate-files and single-file (merged PDF with cover pages) shares.
- Words arrive from inside the app or from any other app via the Share Extension, and wait as new entries until translated.
- iPhone and iPad, synced through iCloud (CloudKit). PDFs are local files; a worksheet created on another device can be rated and recreated.
- The product also has a marketing website (tobokachi.app, separate repository `tobokachi`, Astro) and an App Store page. This file describes the whole product; the website reuses it.

## Capabilities and Constraints

- Swift + SwiftUI, iOS 18.6+, SwiftData with CloudKit, FSRS v5. Native iOS conventions (TabView, NavigationStack, grouped lists, sheets) are the baseline for app UI.
- Terminology: Goal (language pair + level + daily targets), Deck, Card, New entry, Worksheet / daily session, Review.
- A Goal's new-card and review numbers are daily **targets**, not caps; never present them as limits.
- 22 learnable languages; UI in English (source), Spanish, German, French and Japanese. German is the longest text; every new string needs all translations.
- Mac version planned: decisions should not rely on iPhone-only patterns.
- Monetization undecided in detail: the app is free today; some features (e.g. single-file share) are planned to become premium later.

## Brand Commitments

- Name: Tobokachi. App Store name "Tobokachi: Flashcards to Print", subtitle "Spaced repetition on paper".
- The PDF worksheet is the heart of the product: the app's job is to prepare the sheet and record its result. Anything that pulls study time onto the screen works against the product.
- Free, no account, no ads, no data collected ("Data Not Collected"); cards stay in the user's iCloud. Do not add tracking, sign-up or claims that contradict this.
- Plain, direct voice: explain the paper ritual and why it works (recall by writing, no notifications on paper), no hype.
- **The PDF worksheet is the brand source.** Its design (`SimpleCardPracticePageView` and `SessionCoverPageView` in the app: white paper, black ink, Apple system faces New York / SF Pro / SF Mono, 6 pt card corners, dashed answer line) and the four rating colours (`tintColor`: again #F0997B, hard #FAC775, good #C0DD97, easy #5DCAA5, with their faces) are the visual identity of the website, the App Store art and the app. When the PDF design or the rating colours change, the website (repository `tobokachi`) and the store art must be updated to match; never give the website a look the PDF does not have.

## Evidence on Hand

- App Store listing drafts and localized texts: `AppStore/listing-en.md`, `AppStore/listing-localized.md`, `AppStore/textos-1.5.md`.
- Marketing plan and competitor analysis: `AppStore/marketing-plan.md`.
- Screenshots and banners: `AppStore/screenshots/`.
- The maintainer's real handwriting over a worksheet (used on the website) lives in the `tobokachi` repository.
- Almost no App Store ratings yet (0 in most stores). No testimonials, user numbers, press or studies: do not invent them.

## Product Principles

1. Paper first: every feature should make the daily sheet better or the trip back to rate it shorter.
2. Correct scheduling over convenience: ratings are applied right away and dated to the day the sheet was made.
3. Quiet, native, trustworthy: no account, no data, no tricks; the app feels like a well-made iOS tool.
4. One clear next step: the Queue always shows what to do now (rate, translate, wait, generate).
5. Every language is first-class, in the UI and in what users learn.

## Accessibility & Inclusion

Five UI languages with long German strings and Japanese text; layouts must survive double-length pseudolanguage and Dynamic Type. Worksheets must print legibly in black and white.
