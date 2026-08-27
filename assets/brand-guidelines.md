# KivuStack Ltd — Brand Guidelines

This document describes the current **KivuStack Ltd** visual identity as established in this repository. These assets represent the current brand identity used on the company hub and website. This is the first formal visual identity for KivuStack Ltd.

> No trademark registration or brand registration is claimed. No exclusive legal rights beyond what is actually known are asserted here.

---

## Brand name

The company name is exactly:

**KivuStack Ltd**

Use this capitalization consistently in all text, logos, and communications. Do not use `KivuStack Ltd`, `KivuStack Ltd`, `KivuStack Ltd`, or `KivuStack Technologies` unless explicitly required as a technical identifier.

Wordmark in the primary logo reads exactly `KivuStack` (the `Ltd` designation appears in supporting text such as the website footer and Open Graph image, but the main mark remains uncluttered for legibility at small sizes).

---

## Logo system

All logos are original, editable SVGs with `viewBox`, no external dependencies, no embedded remote resources, and no scripts.

### Files

| File | Purpose | Background |
|------|---------|------------|
| `assets/KivuStack-logo.svg` | Primary logo — icon + `KivuStack` wordmark | Light (`#ffffff`) |
| `assets/KivuStack-logo-dark.svg` | Logo variant for dark backgrounds — light wordmark | Dark (`#0b1020`) |
| `assets/KivuStack-icon.svg` | Icon only — for favicon, small spaces, avatars | Light |
| `assets/KivuStack-icon-dark.svg` | Icon only — light icon for dark backgrounds | Dark |

Deployed copies for the website are available at `assets/images/` (`kivustack-logo.svg`, `kivustack-logo-dark.svg`, `kivustack-icon.svg`, `favicon.svg`, `og-image.svg`) — website uses root `assets/`.

### Icon concept

The icon is a 32×32 rounded square (`rx 8`) with a clean geometric **K** mark. The K is formed by a vertical stem and two diagonal arms — simple enough to recognize at 16 px, without circuit‑board clichés, gradients, or stock graphics. The mark works independently and as part of the full logo.

### Usage

* Use `KivuStack-logo.svg` on light backgrounds (website header, documents).
* Use `KivuStack-logo-dark.svg` on dark backgrounds (hero, footer dark, social).
* Use `KivuStack-icon.svg` where space is constrained (favicon, 16–32 px).
* Maintain clear space around the logo equal to the height of the `K` stem.
* Do not stretch, rotate, add effects, or change colors outside the approved palette.
* Do not recreate or imitate an existing company’s identity.

---

## Brand colors

A small, coherent palette. All colors are flat — no excessive gradients.

| Role | Name | HEX | Usage |
|------|------|-----|-------|
| **Primary** | KivuStack Navy | `#0f172a` | Logo icon background (light), primary text, header |
| **Secondary** | Slate 800 | `#1e293b` | Hover states, secondary surfaces |
| **Accent** | KivuStack Blue | `#2563eb` | Interactive elements, links, badges, accent dot |
| **Accent Hover** | Blue 700 | `#1d4ed8` | Button hover |
| **Accent Soft** | Blue 50 | `#eff6ff` | Soft backgrounds, icon badges |
| **Accent Border** | Blue 200 | `#bfdbfe` | Borders on accent elements |
| **Primary Background** | White | `#ffffff` | Page background, cards |
| **Dark Background** | Navy Deep | `#0b1020` | Hero, dark sections |
| **Dark Background 2** | Navy Lift | `#111a33` | Hero gradient lift |
| **Primary Text** | Slate 900 | `#0f172a` | Headings, body |
| **Muted Text** | Slate 500 | `#64748b` | Secondary copy |
| **Muted 2** | Slate 400 | `#94a3b8` | Tertiary copy (dark panels) |
| **Border / Surface** | Slate 200 | `#e2e8f0` | Borders, dividers |
| **Border Strong** | Slate 300 | `#cbd5e1` | Dashed/strong borders |

The palette meets WCAG contrast for text: `#0f172a` on `#ffffff` (≈ 16:1), `#ffffff` on `#0b1020` (≈ 16:1), `#2563eb` on `#ffffff` (≈ 4.6:1 for large text and UI).

---

## Typography

System‑first — no external font downloads, fast and consistent across platforms.

* **Font stack:** `ui-sans-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", Ubuntu, Cantarell, sans-serif` (and `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` for code)
* **Heading style:** `font-weight 800` for `h1`, `700` for `h2`, `650` for `h3`, `letter-spacing -0.02em`, `line-height 1.15`
* **Body style:** `font-size 16px`, `line-height 1.6`, `color #0f172a`, `400` regular
* **Navigation style:** `font-size 0.92rem`, `font-weight 550`, `color #0f172a`, `letter-spacing -0.01em`
* **Button style:** `font-size 0.95rem`, `font-weight 650`, `border-radius 999px`, `letter-spacing 0`
* **Code / technical style:** `ui-monospace`, `font-size 0.82rem`, `background rgba(255,255,255,0.06)` on dark, `border #e2e8f0` on light

No external font dependency is added solely for branding.

---

## Favicon

* `assets/images/favicon.svg` — 32×32 icon-based favicon (same K mark). Referenced in `index.html` and `404.html` at repository root as `type="image/svg+xml"`.
* Modern browsers support SVG favicons reliably; no additional `.ico` is required for core support. A PNG fallback can be added later if analytics show a need.

## Social / Open Graph image

* `assets/images/og-image.svg` — 1200×630 social preview. Contains `KivuStack Ltd`, descriptor “Useful, reliable, and accessible technology” and supporting line “Building practical digital solutions — software applications, web platforms, mobile apps, and automation systems.” Uses approved brand colors, no invented products, statistics, locations, awards, or claims. Readable when scaled to social preview size.

Referenced in `index.html` at repository root as:
`https://kivustack.pages.dev/assets/images/og-image.svg` (and Twitter card).

---

## Website integration

* Header wordmark replaced with `assets/images/kivustack-logo.svg` (light) linking to `#home` with `alt="KivuStack Ltd"`.
* Footer uses `kivustack-logo.svg` variant (primary on light footer) — `assets/images/kivustack-logo.svg`.
* CSS variables in `assets/css/style.css` at repository root align with this palette (`--text #0f172a`, `--accent #2563eb`, `--bg-hero #0b1020`, etc.).
* No redesign beyond brand integration — responsive layout, accessibility, reduced‑motion, focus states, and performance characteristics are preserved.

---

## License / intellectual property

* **Software/code** in this repository is licensed under the repository’s `LICENSE` (MIT) where stated.
* **Brand assets** — logos, icons, wordmark, Open Graph image, favicon — are company identity assets of **KivuStack Ltd** and are **not** automatically covered by the MIT license. Do not reuse KivuStack Ltd branding to imply affiliation without permission. Each repository will state its applicable license; branding remains property of KivuStack Ltd.

Do not add unverified legal claims.

---

## Current status

These files constitute the **current KivuStack Ltd brand identity** as of 2026. Future refinements will be versioned in this repository. The `Ltd` designation appears in supporting lockups (e.g., `KivuStack Ltd` in OG image and footer) while the primary mark remains `KivuStack` for clarity.

Part of [KivuStack Ltd](../README.md) · Website: https://kivustack.pages.dev/ · GitHub: https://github.com/hervecoder/KivuStack

