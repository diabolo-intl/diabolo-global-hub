## Problem
WhatsApp shows the title and description but no thumbnail because every page is missing the `og:image` Open Graph meta tag (and `og:url`, which anchors the preview card to the correct URL).

## Proposed fix

### 1. Create the social-share image from slide1
Use `site/assets/hero/slide1.webp` as the source and produce a properly cropped 1200×630 (1.91:1) JPEG — the standard OG dimensions WhatsApp/Facebook/Twitter prefer.

- Output: `site/assets/og-image.jpg`
- Mirror to: `public/site/assets/og-image.jpg`
- Why JPEG and not WebP: WhatsApp's link preview crawler does not reliably render WebP — using JPEG guarantees the thumbnail shows everywhere.

### 2. Add the missing OG tags on every page
Insert this block in `<head>` right after the existing `og:type` line:

```html
<meta property="og:url" content="https://idfdiabolo.com/<page>" />
<meta property="og:image" content="https://idfdiabolo.com/assets/og-image.jpg" />
<meta property="og:image:secure_url" content="https://idfdiabolo.com/assets/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:alt" content="International Diabolo Federation" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://idfdiabolo.com/assets/og-image.jpg" />
```

Pages to update (both `site/` and `public/site/`):
- `index.html` — og:url = `https://idfdiabolo.com/`
- `grading.html` — og:url = `https://idfdiabolo.com/grading.html`
- `idt.html` — og:url = `https://idfdiabolo.com/idt.html`
- `news.html` — og:url = `https://idfdiabolo.com/news.html`

Also add `og:title` and `og:description` on `grading.html`, `idt.html`, `news.html` (currently only `index.html` has them).

### 3. Verify
After pushing to GitHub Pages:
- Use the Facebook Sharing Debugger (developers.facebook.com/tools/debug/) — paste the URL and click "Scrape Again" to force a re-fetch.
- WhatsApp caches previews per-link aggressively. If a link was shared before this fix, the old (no-image) preview may persist for hours/days. Test with a new URL (e.g. append `?v=2`) to force a fresh fetch.

## Notes
- Absolute `https://idfdiabolo.com/...` URLs are required — WhatsApp ignores relative paths.
- The OG image must be publicly reachable (no auth, no redirect chain). GitHub Pages serves it directly, so this will work.

Ready to implement?