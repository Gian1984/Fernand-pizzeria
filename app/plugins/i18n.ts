import { createI18n } from 'vue-i18n'
import { messages } from '~/i18n/messages'

// vue-i18n come plugin Nuxt (niente @nuxtjs/i18n): la lingua resta un toggle
// client-side, NESSUN prefisso URL. Gli URL restano solo / e /menu (QR code).
//
// Modalità Composition (legacy:false): useI18n() nei <script setup> risolve
// correttamente i messaggi (in legacy+allowComposition tornava stringa vuota
// in SSR). globalInjection:true mantiene $t nei template come prima.
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'fr',
    fallbackLocale: 'fr',
    messages,
  })

  vueApp.use(i18n)
})
