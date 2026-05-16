// Porting della logica SEO che prima stava in src/router.js (beforeEach + DOM
// injection lato client). Ora i tag sono renderizzati lato server (SSG).
export const BASE_URL = 'https://www.artigianodellafarina.be'

// Immagini per OG/JSON-LD: ora servite davvero da /img/seo/ (prima 404).
const SEO_IMAGE_OG = `${BASE_URL}/img/seo/logoartigiano_1500.png`
const SEO_IMAGE_LOGO = `${BASE_URL}/img/seo/logoartigiano_500.png`
const LOCALES = ['fr', 'en', 'it']

// Descrizione condivisa (identica a quella della SPA originale).
export const SITE_DESCRIPTION =
  "Célébrant l'art de la boulangerie, L'Artigiano della Farina propose une expérience culinaire extraordinaire, transformant avec amour la farine en pizzas et sandwiches sublimes, un véritable voyage de saveurs authentiques."

export function restaurantJsonLd(routePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: "L'Artigiano della Farina",
    url: `${BASE_URL}${routePath}`,
    image: SEO_IMAGE_LOGO,
    telephone: '+32 499 64 62 69',
    priceRange: '$$',
    servesCuisine: ['Italian', 'Pizza', 'Sandwiches'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pl. Fernand Cocq 13',
      addressLocality: 'Ixelles',
      postalCode: '1050',
      addressCountry: 'BE',
    },
    sameAs: [
      'https://www.instagram.com/artigiano_della_farina/',
      'https://maps.app.goo.gl/W6otSYKx9A6BNdhw8',
    ],
    hasMenu: `${BASE_URL}/menu`,
  }
}

// Imposta titolo, meta OG/Twitter, canonical, hreflang e JSON-LD per la pagina.
export function usePageSeo({ path, title }) {
  const url = `${BASE_URL}${path}`

  useSeoMeta({
    title,
    description: SITE_DESCRIPTION,
    ogSiteName: "L'Artigiano della Farina",
    ogTitle: title,
    ogDescription: SITE_DESCRIPTION,
    ogType: 'website',
    ogUrl: url,
    ogImage: SEO_IMAGE_OG,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: SITE_DESCRIPTION,
    twitterImage: SEO_IMAGE_OG,
    robots: 'index,follow,max-image-preview:large',
  })

  useHead({
    link: [
      { rel: 'canonical', href: url },
      ...LOCALES.map(lang => ({ rel: 'alternate', hreflang: lang, href: url })),
      { rel: 'alternate', hreflang: 'x-default', href: url },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(restaurantJsonLd(path)),
      },
    ],
  })
}
