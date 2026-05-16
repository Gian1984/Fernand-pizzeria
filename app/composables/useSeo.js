// SEO/head per pagina, renderizzato lato server (SSG).
export const BASE_URL = 'https://www.artigianodellafarina.be'

// Immagini OG generate da scripts/generate-og.php (sfondo nero + logo hero).
// 1.91:1 per le card social, 1:1 per lo structured data di Google.
const OG_IMAGE = `${BASE_URL}/img/seo/og-default.png`
const OG_IMAGE_SQUARE = `${BASE_URL}/img/seo/og-square.png`
const OG_IMAGE_ALT = "Logo L'Artigiano della Farina"

export function restaurantJsonLd(routePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: "L'Artigiano della Farina",
    url: `${BASE_URL}${routePath}`,
    // Più immagini (quadrata + wide): consigliato per i rich result Google.
    image: [OG_IMAGE_SQUARE, OG_IMAGE],
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
    // Coordinate di Place Fernand Cocq, Ixelles (approssimate — da verificare
    // con quelle esatte del locale su Google Maps).
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8366,
      longitude: 4.3709,
    },
    openingHoursSpecification: [
      // Pranzo
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '11:30', closes: '14:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '12:00', closes: '14:30' },
      // Cena
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '18:00', closes: '22:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '18:00', closes: '23:00' },
      // Domenica: orario continuato
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '13:00', closes: '22:00' },
    ],
    sameAs: [
      'https://www.instagram.com/artigiano_della_farina/',
      'https://maps.app.goo.gl/W6otSYKx9A6BNdhw8',
    ],
    hasMenu: `${BASE_URL}/menu`,
  }
}

// Imposta titolo, meta OG/Twitter, canonical e JSON-LD per la pagina.
// Niente hreflang: le lingue non hanno URL propri (switch client-side),
// quindi gli alternate sarebbero tutti uguali e scorretti.
export function usePageSeo({ path, title, description }) {
  const url = `${BASE_URL}${path}`

  useSeoMeta({
    title,
    description,
    ogSiteName: "L'Artigiano della Farina",
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: url,
    ogLocale: 'fr_BE',
    ogImage: OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: OG_IMAGE_ALT,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: OG_IMAGE,
    twitterImageAlt: OG_IMAGE_ALT,
    robots: 'index,follow,max-image-preview:large',
  })

  useHead({
    link: [
      { rel: 'canonical', href: url },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(restaurantJsonLd(path)),
      },
    ],
  })
}
