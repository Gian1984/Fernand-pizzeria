// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-05-16',

  // Sito statico: 2 pagine prerenderizzate, hosting statico come la SPA attuale.
  ssr: true,

  // vue-i18n@9.14 risolve già la full build (col compiler) di default; va solo
  // bundlato nel server, altrimenti Nitro lo esternalizza e il prerender rompe.
  build: {
    transpile: ['vue-i18n'],
  },
  nitro: {
    prerender: {
      // URL invariati (QR code in circolazione): solo / e /menu
      routes: ['/', '/menu'],
      crawlLinks: true,
    },
  },

  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: "L'Artigiano della Farina",
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        { rel: 'icon', type: 'image/webp', href: '/img/pizza-red.webp' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Homemade+Apple&family=Josefin+Sans:wght@400;600&display=swap',
        },
      ],
    },
  },
})
