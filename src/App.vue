<script>

import {defineComponent, h} from "vue";

export default {

  data() {
    return {
      flag: "",
      description: "Cliquez sur les icônes pour nous trouver sur une carte ou sur les réseaux sociaux. Vous souhaitez réserver une table ou commander une pizza ? Cliquez sur le téléphone ! Nous t'attendons!"
    }
  },

  computed: {
    transferFeatures() {
      return [
        {
          id: 1,
          name: this.$t('contact.address'),
          href:'https://maps.app.goo.gl/W6otSYKx9A6BNdhw8',
          description:
              'Pl. Fernand Cocq 13' +
              ' - 1050 Ixelles',
          icon: MapPinIcon,
        },
        {
          id: 2,
          name: this.$t('contact.contact'),
          href:'tel:0032499646269',
          description:
              'Tel: 0499 64 62 69',
          icon: PhoneArrowUpRightIcon,
        },
        {
          id: 3,
          name: 'Instagram',
          description:
              "L'Artigiano della farina Instagram",
          href: 'https://www.instagram.com/artigiano_della_farina/',
          icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                  h('path', {
                    'fill-rule': 'evenodd',
                    d:
                        'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                    'clip-rule': 'evenodd',
                  }),
                ]),
          }),
        },
      ]
    }
  },



  methods: {

    scrolltotop(){
      {
        window.scrollTo(0,0);
      }
    },

    homePage() {
      if(this.$i18n.locale == "fr" ) {
        return (this.flag = './img/flag/belgium.png') && (this.description = 'Cliquez sur les icônes pour nous trouver sur une carte ou sur les réseaux sociaux. Vous souhaitez réserver une table ou commander une pizza ? Cliquez sur le téléphone ! Nous t\'attendons!')
      } else if(this.$i18n.locale == "en") {
        return (this.flag = './img/flag/british.png') && (this.description = 'Click on the icons to find us on a map or over the social media. Do you want to book a table or order a pizza? Click on the phone! We are waiting for you!')
      } else {
        return (this.flag = './img/flag/italy.png') && (this.description = 'Clicca sulle icone per trovarci sulla mappa o sui social media. Vuoi prenotare un tavolo o ordinare una pizza? Clicca sul telefono! Ti stiamo aspettando!')
      }
    },

  }
}
</script>


<template>
  <Disclosure as="nav" class="bg-transparent fixed z-50 w-full" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="block h-8 w-auto lg:hidden" src="./assets/img/pizza-red.webp" alt="Pizza-logo" />
            <img class="hidden h-8 w-auto lg:block" src="./assets/img/pizza-red.webp" alt="Pizza-logo" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link to="/" class="rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white nav-item">{{ $t("nav.home") }}</router-link>
              <router-link to="/menu" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white nav-item" >{{ $t("nav.menu") }}</router-link>
            </div>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div class="flex">
                <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <img v-if="homePage()" class="h-8 w-8 rounded-full" id="flag" :src="flag" alt="pizza-vino-logo" />
                </MenuButton>
                <form>
                  <div class="mt-1">
                    <label for="desktop-currency" class="sr-only">Languages</label>
                    <div class="ml-2 group relative bg-transparent border-transparent rounded-md outline-none focus:outline-none">
                      <select v-model="$i18n.locale" id="desktop-currency" name="currency" class="bg-none bg-transparent border-transparent rounded-md py-0.5 pl-2 pr-1 flex items-center text-sm font-medium text-white group-hover:text-gray-100 outline-none focus:outline-none focus:border-transparent">
                        <option value="fr">FR</option>
                        <option value="en">EN</option>
                        <option value="it">IT</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </Menu>
          </div>
        </div>
        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars2Icon v-if="!open" class="block h-6 w-6 text-white" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <DisclosureButton as="a" href="#pizze-red" class="block rounded-md bg-neutral-800 px-3 py-2 text-base font-medium text-white nav-item hover:bg-gray-700">{{ $t("nav.pizzas") }}</DisclosureButton>
        <DisclosureButton as="a" href="#vini" class="block rounded-md bg-neutral-800 px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white nav-item">{{ $t("nav.wines") }}</DisclosureButton>
        <DisclosureButton as="a" href="#contact" class="block rounded-md bg-neutral-800 px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white nav-item">{{ $t("nav.contact") }}</DisclosureButton>
      </div>
      <div class="border-t border-gray-700 pt-4 pb-3">
        <div class="flex items-center mx-2.5 bg-neutral-800 hover:bg-gray-700 py-1.5 rounded-md">
          <div class="flex-shrink-0 ml-2">
            <img v-if="homePage()" class="h-10 w-10 rounded-full" id="flag" :src="flag" alt="pizza-vino-language-flag" />
          </div>
          <div class="ml-3">
            <form>
              <div class="mt-1">
                <label for="desktop-currency" class="sr-only">Languages</label>
                <div class="ml-2 group relative bg-transparent border-transparent rounded-md outline-none focus:outline-none">
                  <select v-model="$i18n.locale" id="desktop-currency" name="currency" class="bg-none bg-transparent border-transparent rounded-md py-0.5 pl-2 pr-1 flex items-center text-sm font-medium text-white group-hover:text-gray-100 outline-none focus:outline-none focus:border-transparent">
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                    <option value="it">IT</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <router-view/>

  <footer class="bg-neutral-900">
    <div class="py-8 sm:py-8 overflow-hidden mb-10" id="contact-me">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="relative lg:grid lg:grid-cols-2 pb-1 lg:gap-8 lg:items-center">


          <div class="relative" id="contact">
              <!--
             <h3 class="text-4xl font-extrabold text-white tracking-tight sm:text-3xl section-title" id="sub_contact" lang="en">
               {{ $t("contact.title") }}
             </h3>
             <p class="text-lg text-white mt-2 contact-desc">
               {{ $t("contact.desc") }}
             </p>
               !-->
             <dl class="mt-14 space-y-3">
               <div v-for="item in transferFeatures" :key="item.id" class="relative">
                 <dt>
                   <a :href="item.href" class="hover:text-gray-300">
                     <div class="absolute flex items-center justify-center h-12 w-12 rounded-md border-2 border-red-700 text-white hover:bg-red-900">
                       <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                     </div>
                     <p class="ml-16 text-lg leading-6 font-medium text-white font-contact-title">{{ item.name }}</p>
                   </a>
                 </dt>
                 <dd class="ml-16 text-gray-300 text-sm font-contact-desc">
                   {{ item.description }}
                 </dd>
               </div>
             </dl>
           </div>


           <div class="mt-10 -mx-4 relative lg:mt-0 gap-8" aria-hidden="true">
             <div class="relative mx-5">

                 <h3 class="text-4xl font-extrabold text-white tracking-tight sm:text-3xl section-title" id="sub_contact" lang="en">
                     {{ $t("contact.title") }}
                 </h3>
                 <p class="text-lg text-white mt-2 contact-desc">
                     {{ $t("contact.desc") }}
                 </p>

               <!-- <h3 class="text-4xl font-extrabold text-white tracking-tight sm:text-3xl section-title" id="sub_opening" lang="en">
                 {{ $t("opening.title") }}
               </h3>
               <div class="mt-10 border-t border-gray-200">
                 <dl class="sm:divide-y sm:divide-gray-200">
                   <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt class="text-sm font-medium text-gray-300 font-day uppercase">
                       {{ $t("opening.mon") }}
                     </dt>
                     <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-time">
                       {{ $t("opening.close") }}
                     </dd>
                   </div>
                   <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt class="text-sm font-medium text-gray-300 font-day uppercase">
                       {{ $t("opening.tue") }}
                     </dt>
                     <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-time">
                       12:00 – 2:30 pm, 6:00 – 10:30 pm
                     </dd>
                   </div>
                   <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt class="text-sm font-medium text-gray-300 font-day uppercase">
                       {{ $t("opening.wed") }}
                     </dt>
                     <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-time">
                       12:00 – 2:30 pm, 6:00 – 10:30 pm
                     </dd>
                   </div>
                   <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt class="text-sm font-medium text-gray-300 font-day uppercase">
                       {{ $t("opening.thu") }}
                     </dt>
                     <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-time">
                       12:00 – 2:30 pm, 6:00 – 10:30 pm
                     </dd>
                   </div>
                   <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt class="text-sm font-medium text-gray-300 font-day uppercase">
                       {{ $t("opening.fri") }}
                     </dt>
                     <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-time">
                       12:00 – 2:30 pm, 6:00 – 10:30 pm
                     </dd>
                   </div>
                   <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt class="text-sm font-medium text-gray-300 font-day uppercase">
                       {{ $t("opening.sat") }}
                     </dt>
                     <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-time">
                       12:00 – 2:30 pm, 6:00 – 10:30 pm
                     </dd>
                   </div>
                   <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt class="text-sm font-medium text-gray-300 font-day uppercase">
                       {{ $t("opening.sun") }}
                     </dt>
                     <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-time">
                       12:00 – 2:30 pm, 6:00 – 10:30 pm
                     </dd>
                   </div>
                 </dl>
               </div> !-->
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--  Food-delivery parteners-->

    <div class="bg-neutral-900">
      <div class="mx-auto pt-18">
        <div class="bg-gray-50 pb-5" id="food_delivery_pannel">
          <div class="max-w-xl mx-auto lg:max-w-none">
            <div class="mt-5 max-w-sm mx-auto grid grid-cols-1 gap-y-5 gap-x-8 sm:max-w-none xl:grid-cols-2">
              <div v-for="delivery in fooddelivery" :key="delivery.name" class="text-center sm:flex sm:text-left lg:block lg:text-center delivey_pannel">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <img class="h-16 mx-auto delivery_img" :src="delivery.imageSrc" :alt="delivery.description" />
                  </div>
                </div>
                <div class="sm:mt-0 sm:ml-3 lg:ml-0" id="order_button">
                  <a :href="delivery.link" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">{{ delivery.name }}</span>
                    <ChevronRightIcon class=" w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="mx-auto max-w-md px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 py-6">
      <p class="text-center text-base hover:text-gray-400 text-white footer-copyright">
        &copy; 2022 Pizza Vino - Mic.pi.da s.r.l. - Pl. Fernand Cocq 13, 1050 Ixelles - TVA: BE 0727796146 Phone 0499 64 62 69.
      </p>
      <a href="https://www.gianlucatiengo.com/">
        <p class="text-center text-base hover:text-gray-400 text-white underline footer-copyright">
          Powered by Gianluca Tiengo.
        </p>
      </a>
      <button class="top-link hide" id="js-top" v-on:click="scrolltotop()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" id="totop"><path d="M12 6H0l6-6z"/></svg>
        <span class="sr-only">Back to top</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, } from '@headlessui/vue'
import { XMarkIcon, ChevronRightIcon, MapPinIcon, PhoneArrowUpRightIcon, Bars2Icon } from '@heroicons/vue/24/outline'
import { defineComponent, h } from 'vue'

const languages =
    [
      {
        id: 1,
        name: "FR",
        value: "fr"
      },
      {
        id: 2,
        name: "EN",
        value: "en"
      },
      {
        id: 3,
        name: "IT",
        value: "it"
      },
    ]

const fooddelivery = [
  {
    name: 'Order now',
    link: 'https://deliveroo.be/fr/menu/brussels/boondael/pizza-vino',
    imageSrc: './img/deliveroo.webp',
    description: "Your favourite restaurants and takeaways, delivered to your door.",
  },
  {
    name: 'Order now',
    link: 'https://www.ubereats.com/be/store/pizzavino/FMBh-fUqQLaX1ctZnOTC3w',
    imageSrc: './img/Uber-Eats-Logo.webp',
    description: "Crave it? Get it. Search for a favourite restaurant, cuisine or dish.",
  }
]


</script>

<style>
  #totop {
    fill: #000000;
    width: 24px;
    height: 12px;
  }

  .top-link {
    position: fixed;
    bottom: 0;
    right: 0;
    display: inline-flex;

    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin: 0 1em 1em 0;
    border-radius: 50%;
    padding: 0.25em;
    width: 30px;
    height: 30px;
    background-color: #f8f8f8;
  }
</style>

