# International Diabolo Federation — Static Site

Pure HTML + Tailwind (CDN) + vanilla JS. Designed to be dropped into GitHub Pages.

## Deploy to GitHub Pages

Upload **the contents of this `site/` folder** to your repository (typically the root or `/docs`), then in your repo: **Settings → Pages → Source → Deploy from a branch** and pick the folder. `index.html` is the entry point.

## File layout

```
site/
├── index.html        # Home (Hero / Intro / Members / Join / Contact)
├── news.html         # News (blog posts)
├── idt.html          # International Diabolo Tournament galleries
├── grading.html      # Grading intro + event galleries
├── js/
│   └── i18n.js       # Translations + data (members, IDT, grading events, news)
└── assets/
    ├── hero/worldmap.svg       # Hero image — swap freely (keep filename or update index.html)
    ├── logos/                  # Association logos (filenames listed in js/i18n.js → MEMBERS)
    ├── idt/<id>/cover.jpg      # Tournament cover photo, e.g. assets/idt/2016-tidt/cover.jpg
    ├── grading/<id>/cover.jpg  # Grading event cover photo
    └── news/                   # News post images
```

## How to update content

All editable content lives in **`js/i18n.js`**.

- **Languages** — edit the `I18N` object (`en`, `zh-CN`, `zh-TW`).
- **Members** — edit the `MEMBERS` array. Place each logo at the path listed in `logo`.
- **IDT tournaments** — edit `TOURNAMENTS`. Add a folder `assets/idt/<id>/` and drop a `cover.jpg` there.
- **Grading events** — edit `GRADING_EVENTS`. Same pattern: `assets/grading/<id>/cover.jpg`.
- **News posts** — edit `NEWS_POSTS`. A commented template is included at the top of the array.

## How to swap the hero image

Replace `assets/hero/worldmap.svg` with your own image (any name works — just update the `src` in `index.html`).

## Contact form

The form opens the visitor's default email client pre-addressed to **diabolo.intl@gmail.com**. No backend required (perfect for GitHub Pages). If you ever want true server-side email, swap the `handleContactSubmit` in `js/i18n.js` to POST to a service like Formspree or Web3Forms.