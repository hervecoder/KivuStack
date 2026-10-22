# Changelog — KivuStack Ltd

This changelog records significant public changes to the **KivuStack Ltd** company hub and website.

---

## 2026-10-22 — Icon System & Interaction Motion (v2.1)

* Iconized the remaining text-only UI: principles, leadership card, contact cards, featured product, primary/ghost CTAs, desktop and mobile navigation, footer links, breadcrumb/back links, and the 404 page. All icons are inline SVG symbols in a once-per-page sprite — no icon font, no CDN, no extra request.
* Replaced the vertical card hover lift with a cursor-tracking radial spotlight and border/elevation response (no layout shift, no Y movement); icon chips now scale in place.
* Added tactile interaction: spring press feedback on buttons/links, pointer-origin ripples on buttons, an animated underline for desktop nav, and a smooth opacity/translate menu transition on mobile.
* Added one shared motion language (`--ease-out`, `--ease-glide`, `--ease-spring`; 140/240/700ms): staggered scroll reveals (70ms per child), hero first-paint cascade, ribbon sheen sweep, floating phone concept with animated progress fill and check-pop, status-dot pulse, scroll-progress bar, header elevation on scroll, subtle hero parallax, and a terminal caret.
* Contrast fixes over the blue ribbon: hero note, Perime disclaimer, and phone caption now sit on white chips.
* Fixed `404.html` to load `assets/js/main.js` — its mobile navigation toggle previously did nothing.
* All motion is transform/opacity based and respects `prefers-reduced-motion` (animations off, all content forced visible); content still renders without JavaScript.
* Page copy, metadata, structured data, canonical URLs, links, and external-request count unchanged.

---

## 2026-10-22 — Website Visual System v2 (Flagship Redesign)

* Website rebuilt on a Stripe-grade visual system adapted to the KivuStack brand — light pages, deep-navy headings (`#061b31`), body slate (`#425a75`), KivuStack Blue (`#2563eb`) as the single interactive accent, conservative 4–8px radii, blue-tinted multi-layer elevation shadows, and a signature tilted blue hero "ribbon".
* Self-hosted typography: Source Sans 3 (variable, latin subset) + Source Code Pro (variable, latin subset) woff2 (~51KB total) under `assets/fonts/` — zero external font requests, no CDN.
* Homepage (`index.html`), Perime product page (`products/perime/`), and `404.html` restyled on the shared system; hero includes a hand-built abstract Perime learning-interface concept graphic (skeleton UI, labelled as a concept — no fabricated product claims).
* Fixed `assets/js/main.js`: reveal-on-scroll now runs on every page (it was gated behind homepage-only anchor links, which left subpage heroes hidden); added a `js` root-class guard so all content renders when JavaScript is unavailable.
* Fixed broken capital-K logo paths (`/assets/images/KivuStack-logo.svg`) on subpages to the actual lowercase `kivustack-logo.svg`; the 404 page now uses the standard mobile nav.
* SEO metadata, canonical URLs, structured data, robots, and page content unchanged; sitemap `lastmod` updated to 2026-10-22.
* No new external dependencies; no analytics; no invented products, domains, contact details, metrics, or ratings.

---

## 2026-09-14 — Perime App Official Launch

Perime App — a flagship product of KivuStack Ltd — is now officially launched and available on Google Play.

* Updated website homepage (`index.html`) to present Perime App as officially launched — now available on Google Play — with launch wording, featured product positioning, and CTA.
* Updated product page (`products/perime/index.html`) with official launch status, Google Play CTA (`https://play.google.com/store/apps/details?id=com.perime.perimeapp&pcampaignid=web_share`), package ID `com.perime.perimeapp`, and concise user-focused description.
* Updated SEO metadata (title, description, Open Graph, Twitter) and JSON-LD `SoftwareApplication` (added `installUrl`, `operatingSystem: Android`, `alternateName`, `inLanguage`, launch description) on both homepage and product page.
* Updated README and documentation (`README.md`, `docs/about.md`, `docs/projects.md`) to reflect launched status, correct brand relationship (Perime App — a flagship product of KivuStack Ltd — Built by KivuStack Ltd), and independence disclaimer.
* Updated sitemap `lastmod` to 2026-09-14.
* No fake metrics, ratings, prices, or government affiliation were added. No secrets or credentials exposed.

Entries are organized chronologically with **newest first** using the format `YYYY-MM-DD — Release/Event`. This file covers company identity, website, branding, documentation, governance, and major public infrastructure — not software release notes for future KivuStack products.

---

## 2026-08-26 — Root Website Structure

Website presentation was restructured to live at the repository root while preserving all company documentation and governance.

* Website source moved from `website/` to repository root (`index.html` and `404.html` now at root, assets at `assets/`).
* GitHub Pages deployment updated to publish only the website artifact via temporary `_site/` directory (`index.html`, `404.html`, `assets/`), excluding company documentation (`README.md`, `CHANGELOG.md`, `LICENSE`, `docs/`, `.github/`).
* Company documentation and governance preserved (`README.md`, `CHANGELOG.md`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `docs/`, `assets/brand-guidelines.md`).
* `website/README.md` migrated to `docs/website.md` and `website/` directory removed after verification.

The website was not newly launched; the existing KivuStack Ltd site was re‑structured and redeployed at `https://hervecoder.github.io/KivuStack/`.

---

## 2026-08-26 — KivuStack Ltd Brand Migration

The public company identity was migrated from **KivuSoft Ltd** to **KivuStack Ltd**.

* Public company identity changed from KivuSoft Ltd to KivuStack Ltd.
* Primary brand changed from KivuSoft to KivuStack.
* Main GitHub repository renamed from `hervecoder/KivuSoft` to `hervecoder/KivuStack` (history preserved, redirect from old URL).
* Website and brand assets migrated from KivuSoft to KivuStack (logo filenames `kivustack-*`, favicon, Open Graph image, documentation, and site content).
* Existing public foundation retained — previous entry preserved as historical record.

This change reflects the current public brand; it does not imply a new legal entity beyond what has been verified.

---

## 2026-08-26 — KivuSoft Ltd Public Foundation

Initial public foundation of the KivuSoft Ltd company hub.

### Company

* Established the public KivuSoft Ltd GitHub company hub at `hervecoder/KivuSoft`.
* Established the official company identity documentation (`README.md`, `docs/about.md`, `docs/mission-and-vision.md`, `docs/projects.md`).

### Governance

* Added MIT license for this company hub repository (`LICENSE` — Copyright (c) 2026 KivuSoft Ltd).
* Added contribution guidelines (`CONTRIBUTING.md`).
* Added code of conduct (`CODE_OF_CONDUCT.md` — Contributor Covenant principles).
* Added security policy (`SECURITY.md`).

### Website

* Launched the KivuSoft Ltd GitHub Pages website at `https://hervecoder.github.io/KivuSoft/` (`website/index.html`, `.github/workflows/pages.yml` with `build_type: workflow`).
* Added responsive navigation and accessible company presentation (hero, about, what we build, mission, vision, principles, projects, technology, contact, GitHub, footer).
* Added custom 404 page (`website/404.html`).

### Brand

* Established the first formal KivuSoft Ltd visual identity.
* Added primary and dark logo variants (`assets/kivusoft-logo.svg`, `assets/kivusoft-logo-dark.svg`).
* Added icon variants (`assets/kivusoft-icon.svg`, `assets/kivusoft-icon-dark.svg`).
* Added favicon (`website/assets/images/favicon.svg`).
* Added Open Graph image (`website/assets/images/og-image.svg`).
* Added brand guidelines (`assets/brand-guidelines.md`).

### Documentation

* Added company overview (`docs/about.md`).
* Added mission and vision (`docs/mission-and-vision.md`).
* Added products/projects documentation (`docs/projects.md`).
* Added brand asset documentation (`assets/README.md`, `assets/brand-guidelines.md`, `website/assets/images/README.md`, `website/README.md`).
