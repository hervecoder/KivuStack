# KivuStack Ltd — Website

This directory contains the official **KivuStack Ltd** website — a lightweight static site deployed to GitHub Pages.

It is a presentation layer on top of the company hub repository. All company truth (README, docs, governance, license) remains in the repository root.

## Structure

```
website/
├── index.html          — homepage (hero, about, what we build, mission, vision, principles, projects, technology, contact)
├── 404.html            — custom 404 page matching site identity
└── assets/
    ├── css/
    │   └── style.css   — all styles (responsive, no frameworks)
    ├── js/
    │   └── main.js     — mobile navigation + scroll enhancements (no dependencies)
    └── images/
        └── README.md   — reserved for official brand images (none committed yet)
```

Company documentation lives **outside** `website/`:

- `docs/` — company documentation
- `README.md`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` — governance & hub

## How GitHub Pages deployment works

The workflow at `.github/workflows/pages.yml`:

1. Triggers on pushes to `main` and on manual dispatch (`workflow_dispatch`)
2. Checks out the repository (`actions/checkout@v4`)
3. Configures GitHub Pages (`actions/configure-pages@v5`)
4. Uploads **only** `website/` as the Pages artifact (`actions/upload-pages-artifact@v3`)
5. Deploys to the `github-pages` environment (`actions/deploy-pages@v4`)

Permissions are minimal: `contents: read`, `pages: write`, `id-token: write`.

No domain, CNAME, or DNS is configured yet. The site is served at the GitHub Pages URL provisioned for `hervecoder/KivuStack` (e.g. `https://hervecoder.github.io/KivuStack/`).

## Where to edit content

- Page structure and copy: `website/index.html` and `website/404.html`
- Company messaging source of truth: root `README.md` and `docs/*.md` — keep the website consistent with those files
- Do not invent products, domains, or contact details — use placeholders where information is not yet verified

## Where styles live

- `website/assets/css/style.css` — single stylesheet, system font stack, CSS variables for theming, responsive breakpoints (mobile, tablet, desktop), reduced-motion support, focus states

## Where JavaScript lives

- `website/assets/js/main.js` — vanilla JavaScript for mobile navigation toggle, outside-click and Escape handling, active-link highlighting, and reveal animations. No frameworks, no external dependencies.

## Local preview

Open `website/index.html` directly in a browser, or serve the directory:

```bash
npx serve website
# or
python -m http.server --directory website 8000
```

## Security

The site keeps the deployment lightweight and private: no analytics, tracking pixels, advertising, external libraries, or build systems. No secrets or credentials are committed.

Part of [KivuStack Ltd](../README.md).

