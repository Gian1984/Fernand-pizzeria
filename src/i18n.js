import { createI18n } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const messages = {



    fr: {
      header: {
        title: "Je suis le titre"
      },
      redpizzas:{
        margherita:"Tomate, Basilic et Mozzarella.",
      }
    },




    en: {

      header: {
        title: "I'm the title"
      },
      redpizzas:{
        margherita:"Tomate, Basilic et Mozzarella.",
      }

    },

    it: {

      header: {
        title: "Sono il titolo"
      },

      redpizzas:{
        margherita:"Pomodoro, Basilico e Mozzarella.",
      }
    },


  }


  return messages
}

export default createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE || 'fr',
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'fr',
  messages: loadLocaleMessages()
})
