# Changelog — KivuStack Ltd

This changelog records significant public changes to the **KivuStack Ltd** company hub and website.

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
