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

### Design-system notes (v2 — 2026-10-22)

* Headings use deep navy `#061b31`; body copy `#425a75` (≈ 7.4:1 on white); secondary text `#64748d`.
* Elevation is blue-tinted and multi-layer — the signature: `rgba(50,50,93,0.25) 0 30px 45px -30px, rgba(0,0,0,0.1) 0 18px 36px -18px` — plus lighter ambient layers. Never a single warm/neutral shadow.
* Radii are conservative: `4px` (buttons, badges, code chips), `5–6px` (cards), `8px` (featured panels). No pill shapes.
* The hero's **KivuStack ribbon** — a tilted band (`−12°`) of `#1e40af → #2563eb → #0ea5e9 → #6366f1` with a soft aura — is the one signature gradient. Everything else stays flat.
* Light/dark cadence: white sections alternate with one immersive dark navy section (`#0b1020 → #111a33`).

---

## Typography (v2 — 2026-10-22)

Self-hosted variable fonts, latin subsets — flagship character with zero external requests.

* **Primary:** `Source Sans 3` variable (weights 200–900) — `assets/fonts/source-sans-3-latin.woff2` (~29KB), fallback `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
* **Monospace:** `Source Code Pro` variable (weights 200–900) — `assets/fonts/source-code-pro-latin.woff2` (~22KB), fallback `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
* **Display style:** weight `300` for `h1`/`h2`/`h3` with progressive negative tracking (≈ −0.025em at 56px, relaxing toward 0 at body sizes) — lightness is the signature
* **Body style:** `16px`, weight `400`, `line-height 1.6`, color `#425a75`; intro copy `18px` weight `300`
* **Navigation / buttons / links:** weight `400`
* **Button style:** `4px` radius, `10px 16px`, primary fill KivuStack Blue; ghost variant with `1px` accent border
* **Code / technical style:** `Source Code Pro`, `13px`, weight `500`; package chips (`com.perime.perimeapp`) use it
* Fonts are preloaded in `<head>` and rendered with `font-display: swap`; the site never contacts a font CDN.

---

## Iconography (v2.1 — 2026-10-22)

* **System:** one inline SVG `<symbol>` sprite at the top of each page (`<svg class="sprite">`, visually hidden), referenced with `<use href="#i-…">`. No icon font, no CDN, no extra HTTP request.
* **Geometry:** 24×24 viewBox, 1.7px stroke, round caps and joins, `currentColor`, no fill — except the GitHub and LinkedIn marks, which are filled brand marks (`ico--brand`) used only to link to KivuStack’s official accounts.
* **Sizes:** 18px inside icon chips, 17px in buttons, 15px in header CTAs, 14px inline / footer (`ico--sm`).
* **Icon chips:** 36×36px (34px in principles, 32px in card headings), 5px radius, `#eff6ff` fill, `#bfdbfe` border, `#1d4ed8` glyph. On pointer hover they scale to 1.07 and rotate −3° — in place, never moving the layout.
* **Set:** product surfaces (software window, globe, mobile, cube, bolt, compass), principles (target, leaf, shield-check, lock, refresh, branch), and utility (arrows, download, external link, GitHub, LinkedIn, link, users, building, home, terminal, check). All are simple original geometry drawn for this site.
* **Accessibility:** every decorative icon is `aria-hidden="true"`; every control keeps a visible text label, so no icon-only meanings are introduced.

## Motion & interaction (v2.1 — 2026-10-22)

One token set in `style.css` — no scattered magic values:

| Token | Value | Use |
|-------|-------|-----|
| `--ease-out` | `cubic-bezier(.22,.61,.36,1)` | color, border, shadow |
| `--ease-glide` | `cubic-bezier(.16,1,.3,1)` | reveals, sheen, progress |
| `--ease-spring` | `cubic-bezier(.34,1.56,.64,1)` | press, icon pop, arrows |
| `--dur-fast` / `--dur` / `--dur-slow` | `140ms` / `240ms` / `700ms` | state / hover / entrance |

* **No vertical hover lift.** Cards respond with border + blue-tinted elevation and a pointer-tracking radial spotlight (≤8% blue, `--mx`/`--my` CSS variables). Icon chips scale in place.
* **Press, don’t jump.** Buttons spring-scale to `0.965` and emit a pointer-origin ripple; nav links scale to `0.97`. Horizontal arrow nudges (2–3px) are the only directional hover movement.
* **Scroll choreography.** Reveal-on-scroll fades/rises sections once, with a 70ms stagger across children (capped at 12). Hero copy cascades on first paint. A 2px gradient scroll-progress bar tracks the page; the header gains elevation after 8px; the hero phone drifts ≤ ~40px for depth. No scroll-jacking — anchors keep native smooth scrolling.
* **Ambient detail.** Ribbon sheen sweep (13s), phone float (7s), one-time progress fill and check pop, status-dot pulse, and a blinking terminal caret.
* **Guardrails.** Transform/opacity only (no layout-thrashing properties). `prefers-reduced-motion: reduce` disables animations/transitions/parallax and forces all reveal content visible. Without JavaScript, all content is visible by default.

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
* CSS variables in `assets/css/style.css` align with the v2 system (`--heading #061b31`, `--accent #2563eb`, `--navy #0b1020`, plus elevation and radius tokens).
* v2 (2026-10-22) is a flagship refresh with the same guarantees preserved: responsive layout, accessible contrast, `prefers-reduced-motion`, visible focus rings, reveal-on-scroll behind a `js` root-class guard (content renders without JavaScript), self-hosted fonts, and no page weight beyond the two woff2 subsets.
* v2.1 (2026-10-22) adds the inline icon sprite and shared motion system documented above; it keeps the same guarantees — self-hosted assets only, no analytics, no icon CDN, reduced-motion support, and content visible without JavaScript.

---

## License / intellectual property

* **Software/code** in this repository is licensed under the repository’s `LICENSE` (MIT) where stated.
* **Brand assets** — logos, icons, wordmark, Open Graph image, favicon — are company identity assets of **KivuStack Ltd** and are **not** automatically covered by the MIT license. Do not reuse KivuStack Ltd branding to imply affiliation without permission. Each repository will state its applicable license; branding remains property of KivuStack Ltd.

Do not add unverified legal claims.

---

## Current status

These files constitute the **current KivuStack Ltd brand identity** as of 2026. Future refinements will be versioned in this repository. The `Ltd` designation appears in supporting lockups (e.g., `KivuStack Ltd` in OG image and footer) while the primary mark remains `KivuStack` for clarity.

Part of [KivuStack Ltd](../README.md) · Website: https://kivustack.pages.dev/ · GitHub: https://github.com/hervecoder/KivuStack

