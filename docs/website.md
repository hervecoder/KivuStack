# Website — KivuStack Ltd

This document describes the official **KivuStack Ltd** website — a lightweight static site deployed to GitHub Pages from the repository root.

The website is a presentation layer on top of the company hub. All company truth (`README.md`, `docs/`, governance, license, brand guidelines) remains separate from the website presentation at the repository root.

## Structure

After the root restructuring, the website source lives at the repository root:

```
/
├── index.html          — homepage (hero, about, what we build, mission, vision, principles, projects, technology, contact)
├── 404.html            — custom 404 page matching site identity
└── assets/
    ├── css/
    │   └── style.css   — all styles (responsive, no frameworks)
    ├── js/
    │   └── main.js     — mobile navigation + scroll enhancements (no dependencies)
    └── images/
        ├── favicon.svg
        ├── og-image.svg
        ├── kivustack-logo.svg
        ├── kivustack-logo-dark.svg
        ├── kivustack-icon.svg
        ├── kivustack-icon-dark.svg
        └── README.md   — image asset notes
```

Company/brand assets also live in `assets/` at the repository root:

* `assets/kivustack-logo.svg`, `kivustack-logo-dark.svg`, `kivustack-icon.svg`, `kivustack-icon-dark.svg` — canonical brand logos
* `assets/brand-guidelines.md` — palette, typography, usage

Company documentation lives alongside:

* `docs/` — company documentation (`about.md`, `mission-and-vision.md`, `projects.md`, `website.md`)
* `README.md`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` — governance & hub

## How GitHub Pages deployment works

The workflow at `.github/workflows/pages.yml`:

1. Triggers on pushes to `main` and on manual dispatch (`workflow_dispatch`)
2. Checks out the repository (`actions/checkout@v4`)
3. Configures GitHub Pages (`actions/configure-pages@v5` with `enablement: true`)
4. Creates a clean temporary directory `_site/` and copies **only** website presentation files:
   * `index.html`
   * `404.html`
   * `assets/` (website-required assets: `css/`, `js/`, `images/`)
5. Uploads `_site/` as the Pages artifact (`actions/upload-pages-artifact@v3` with `path: _site`)
6. Deploys to the `github-pages` environment (`actions/deploy-pages@v4`)

Permissions are minimal: `contents: read`, `pages: write`, `id-token: write`.

No domain, CNAME, or DNS is configured yet. The site is served at the GitHub Pages URL provisioned for `hervecoder/KivuStack` (`https://hervecoder.github.io/KivuStack/`). Only the website presentation is published — company documentation (`README.md`, `CHANGELOG.md`, `LICENSE`, `docs/`, `.github/`) is **not** included in the Pages artifact.

The temporary `_site/` directory is created inside the workflow runner only and is **not** committed to the repository.

## Where to edit content

* Page structure and copy: `index.html` and `404.html` at repository root
* Company messaging source of truth: `README.md` and `docs/*.md` — keep the website consistent with those files
* Styles: `assets/css/style.css` — single stylesheet, system font stack, CSS variables, responsive breakpoints, reduced-motion, focus states
* JavaScript: `assets/js/main.js` — vanilla JS for mobile navigation, outside-click and Escape handling, active-link highlighting, reveal animations

Do not invent products, domains, or contact details — use placeholders where information is not yet verified.

## Local preview

Open `index.html` directly in a browser, or serve the repository root:

```bash
npx serve .
# or
python -m http.server 8000
# then open http://localhost:8000
```

For a preview that matches the Pages artifact (only website files), serve the `_site` equivalent:

```bash
mkdir -p _site && cp index.html 404.html -t _site/ && cp -r assets _site/ && npx serve _site
```

## Security

The site keeps deployment lightweight: no analytics, tracking pixels, advertising, external libraries, or build systems. No secrets or credentials are committed. The Pages artifact contains only `index.html`, `404.html`, and `assets/`.

Part of [KivuStack Ltd](../README.md).
