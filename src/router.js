// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'

const BASE_URL = 'https://www.artigianodellafarina.be'
// immagini per SEO/social: metti i file in /public/img/seo/
const SEO_IMAGE_OG = `${BASE_URL}/img/seo/logoartigiano_1500.png`
const SEO_IMAGE_LOGO = `${BASE_URL}/img/seo/logoartigiano_500.png`
const LOCALES = ['fr', 'en', 'it']

function buildHreflangLinks(path) {
    const links = LOCALES.map(lang => ({
        rel: 'alternate',
        hreflang: lang,
        href: `${BASE_URL}${path}`,
    }))
    links.push({
        rel: 'alternate',
        hreflang: 'x-default',
        href: `${BASE_URL}${path}`,
    })
    return links
}

function restaurantJsonLd(routePath) {
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
            addressCountry: 'BE'
        },
        sameAs: [
            'https://www.instagram.com/artigiano_della_farina/',
            'https://maps.app.goo.gl/W6otSYKx9A6BNdhw8'
        ],
        hasMenu: `${BASE_URL}/menu`
    }
}

function createMetaTag(def) {
    const el = document.createElement('meta')
    Object.entries(def).forEach(([k, v]) => el.setAttribute(k, v))
    el.setAttribute('data-vue-router-controlled', '')
    return el
}

function createLinkTag(def) {
    const el = document.createElement('link')
    Object.entries(def).forEach(([k, v]) => el.setAttribute(k, v))
    el.setAttribute('data-vue-router-controlled', '')
    return el
}

function createJsonLd(data) {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.text = JSON.stringify(data)
    el.setAttribute('data-vue-router-controlled', '')
    return el
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: "L'Artigiano della Farina - Accueil",
            metaTags: [
                { name: 'description', content: "Célébrant l'art de la boulangerie, L'Artigiano della Farina propose une expérience culinaire extraordinaire, transformant avec amour la farine en pizzas et sandwiches sublimes, un véritable voyage de saveurs authentiques." },

                // Open Graph
                { property: 'og:site_name', content: "L'Artigiano della Farina" },
                { property: 'og:title', content: "L'Artigiano della Farina - Accueil" },
                { property: 'og:description', content: "Célébrant l'art de la boulangerie, L'Artigiano della Farina propose une expérience culinaire extraordinaire, transformant avec amour la farine en pizzas et sandwiches sublimes, un véritable voyage de saveurs authentiques." },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: `${BASE_URL}/` },
                { property: 'og:image', content: SEO_IMAGE_OG },

                // Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: "L'Artigiano della Farina - Accueil" },
                { name: 'twitter:description', content: "Célébrant l'art de la boulangerie, L'Artigiano della Farina propose une expérience culinaire extraordinaire, transformant avec amour la farine en pizzas et sandwiches sublimes, un véritable voyage de saveurs authentiques." },
                { name: 'twitter:image', content: SEO_IMAGE_OG },

                { name: 'robots', content: 'index,follow,max-image-preview:large' }
            ],
            linkTags: [
                { rel: 'canonical', href: `${BASE_URL}/` },
                ...buildHreflangLinks('/')
            ],
            jsonLd: route => restaurantJsonLd(route.path)
        }
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu,
        meta: {
            title: "L'Artigiano della Farina - La carte",
            metaTags: [
                { name: 'description', content: "Célébrant l'art de la boulangerie, L'Artigiano della Farina propose une expérience culinaire extraordinaire, transformant avec amour la farine en pizzas et sandwiches sublimes, un véritable voyage de saveurs authentiques." },

                { property: 'og:site_name', content: "L'Artigiano della Farina" },
                { property: 'og:title', content: "L'Artigiano della Farina - La carte" },
                { property: 'og:description', content: "Célébrant l'art de la boulangerie, L'Artigiano della Farina propose une expérience culinaire extraordinaire, transformant avec amour la farine en pizzas et sandwiches sublimes, un véritable voyage de saveurs authentiques." },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: `${BASE_URL}/menu` },
                { property: 'og:image', content: SEO_IMAGE_OG },

                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: "L'Artigiano della Farina - La carte" },
                { name: 'twitter:description', content: "Célébrant l'art de la boulangerie, L'Artigiano della Farina propose une expérience culinaire extraordinaire, transformant avec amour la farine en pizzas et sandwiches sublimes, un véritable voyage de saveurs authentiques." },
                { name: 'twitter:image', content: SEO_IMAGE_OG },

                { name: 'robots', content: 'index,follow,max-image-preview:large' }
            ],
            linkTags: [
                { rel: 'canonical', href: `${BASE_URL}/menu` },
                ...buildHreflangLinks('/menu')
            ],
            jsonLd: route => ({
                ...restaurantJsonLd(route.path),
                hasMenu: `${BASE_URL}/menu`
            })
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && (r.meta.metaTags || r.meta.linkTags || r.meta.jsonLd))
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title
    }

    document.querySelectorAll('[data-vue-router-controlled]').forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el)
    })

    if (!nearestWithMeta) return next()

        ;(nearestWithMeta.meta.metaTags || [])
        .map(def => createMetaTag(def))
        .forEach(tag => document.head.appendChild(tag))

    ;(nearestWithMeta.meta.linkTags || [])
        .map(def => createLinkTag(def))
        .forEach(link => document.head.appendChild(link))

    if (nearestWithMeta.meta.jsonLd) {
        const data = typeof nearestWithMeta.meta.jsonLd === 'function'
            ? nearestWithMeta.meta.jsonLd(to)
            : nearestWithMeta.meta.jsonLd
        document.head.appendChild(createJsonLd(data))
    }

    next()
})

export default router
