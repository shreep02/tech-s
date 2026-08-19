# SstechWeb

## SSTech Website

Company website for SSTech BV, a software development and quality engineering company based in Zwevegem, Belgium.

## What It Includes

- Responsive SSTech company homepage
- Web development, test automation, API/integration testing, UAT, and device testing services
- Supplied SSTech branding and hero artwork
- Get in touch form connected to Formspree

## Requirements

- Node.js `22.22.3` or newer for Angular 22
- npm

## Development Server

Install dependencies and start the local server:

```bash
npm install
npm start
```

Open `http://localhost:4200/` in a browser.

To use another port:

```bash
npm start -- --port 4201
```

## Build

```bash
npm run build
```

The production output is written to `dist/sstech-web`.

## Tests

```bash
npm test
```

## Project Structure

- `src/app/app.component.ts` - page structure and content
- `src/styles.scss` - global SSTech visual system and responsive styles
- `public/icon.png` - SSTech icon
- `public/webpage.png` - hero background artwork
- `public/shortlogo.jpg` - supplied logo asset retained for future use

The contact form uses the configured Formspree endpoint in `src/app/app.component.ts`.
