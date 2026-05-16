# L'Artigiano della Farina

Sito vetrina della pizzeria, **Nuxt 4** (SSG / sito statico).

- 2 pagine: `/` (home) e `/menu`. **Gli URL non devono cambiare** (QR code in circolazione).
- i18n: `vue-i18n` come plugin (`app/plugins/i18n.ts`), lingua switchata client-side
  **senza prefisso URL** (FR / EN / IT). Default FR.
- SEO/head per pagina via `useSeoMeta` / `useHead` (`app/composables/useSeo.js`),
  renderizzato lato server.

## Sviluppo

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build statica (deploy)

```bash
npm run generate     # output statico in .output/public/
npm run preview      # anteprima della build
```

Deploy: caricare il contenuto di `.output/public/` sull'hosting statico
(come si faceva con `dist/` della vecchia SPA).
