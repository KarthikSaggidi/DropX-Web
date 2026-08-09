# DropXcorp Website

A complete editable React + Vite website built in the same blue-white enterprise UI direction as the reference screenshot.

## Pages included

- Home
- About Us
- Services
- Separate service detail pages
- Industries
- Separate industry detail pages
- Portfolio
- Blog
- Careers
- Contact Us

## How to run

```bash
cd dropxcorp-website
npm install
npm run dev
```

Open the local URL shown by Vite.

## How to edit content

Most text, cards, services, industries, portfolio items, blog posts and jobs are in:

```bash
src/data/siteData.js
```

## Build for hosting

```bash
npm run build
```

Upload the generated `dist` folder to your hosting/server.

If the website is deployed inside a subdirectory (for example,
`https://example.com/dropxcorp/`), build it with the same path so Vite can
generate the correct production asset URLs:

```bash
VITE_BASE_PATH=/dropxcorp/ npm run build
```

For direct links such as `/about` to work, configure your host to serve
`index.html` as the fallback for routes that are not real files.
