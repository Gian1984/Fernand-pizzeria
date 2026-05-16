import { createI18n } from 'vue-i18n'
import { messages } from '~/i18n/messages'

// vue-i18n come plugin Nuxt (niente @nuxtjs/i18n): la lingua resta un toggle
// client-side, NESSUN prefisso URL. Gli URL restano solo / e /menu (QR code).
// legacy:true mantiene $t/this.$t/$i18n.locale come nella SPA originale;
// allowComposition:true abilita useI18n() nei <script setup>.
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: true,
    allowComposition: true,
    globalInjection: true,
    locale: 'fr',
    fallbackLocale: 'fr',
    messages,
  })

  vueApp.use(i18n)
})
