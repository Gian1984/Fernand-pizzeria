<script>
import imagePath from '../assets/img/lavagna.webp'
import carrelage from '../assets/img/carrelage.webp'
import gsap from 'gsap'

export default {

  computed: {
    redpizzas() {
      return [

        {
          name: 'Margherita',
          description: this.$t('redpizzas.Margherita'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Regina',
          description: this.$t('redpizzas.Regina'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Principessa',
          description: this.$t('redpizzas.Principessa'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Burrata',
          description: this.$t('redpizzas.Burrata'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Marinara',
          description: this.$t('redpizzas.Marinara'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Rucola Reggiano',
          description: this.$t('redpizzas.RucolaReggiano'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Porchetta Funghi',
          description: this.$t('redpizzas.PorchettaFunghi'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Napoli',
          description: this.$t('redpizzas.Napoli'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Siciliana',
          description: this.$t('redpizzas.Siciliana'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Capricciosa',
          description: this.$t('redpizzas.Capricciosa'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Diavola',
          description: this.$t('redpizzas.Diavola'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Calabrese',
          description: this.$t('redpizzas.Calabrese'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Boscaiola',
          description: this.$t('redpizzas.Boscaiola'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Bresaola e tartufo',
          description: this.$t('redpizzas.BresaolaTartufo'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Crudaiola',
          description: this.$t('redpizzas.Crudaiola'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Vegana',
          description: this.$t('redpizzas.Vegana'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Vegetariana',
          description: this.$t('redpizzas.Vegetariana'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Calzone',
          description: this.$t('redpizzas.Calzone'),
          price: '',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
      ]
    },

    reviews() {
      return [
          {
            id: 1,
            rating: 5,
            content: this.$t('review.revOne'),
            date: this.$t('review.dateOne'),
            datetime: '2021-07-16',
            author: 'Emily Selman',
            avatarSrc:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
            alt:'user-photo'
          },
          {
            id: 2,
            rating: 5,
            content: this.$t('review.revTwo'),
            date: this.$t('review.dateTwo'),
            datetime: '2021-07-12',
            author: 'Hector Gibbons',
            avatarSrc:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
            alt:'user-photo'
          },
        ]
    },

    whitepizzas() {
      return [
        {
          name: 'Salsiccia Friarelli',
          description: this.$t('whitepizzas.SalsicciaFriarelli'),
          price:'',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: '4 Formaggi',
          description: this.$t('whitepizzas.QuattroFormaggi'),
          price:'',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Patate & Tartufo',
          description: this.$t('whitepizzas.PatateTartufo'),
          price:'',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Mortadella',
          description: this.$t('whitepizzas.Mortadella'),
          price:'',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
        {
          name: 'Genovese',
          description: this.$t('whitepizzas.Genovese'),
          price:'',
          icon: "./img/newrounded.png",
          alt:'Pizza icon'
        },
      ]
    },

    maxipizzas() {
      return [
        {
          name: 'Margherita',
          description: this.$t('maxipizzas.Margherita'),
          price:'',
          icon: "./img/newrounded.png",
          iconSlice: "./img/slice.png",
          alt:'Pizza icon'
        },
        {
          name: 'Diavola',
          description: this.$t('maxipizzas.Diavola'),
          price:'',
          icon: "./img/newrounded.png",
          iconSlice: "./img/slice.png",
          alt:'Pizza icon'
        },
        {
          name: 'Porchetta funghi',
          description: this.$t('maxipizzas.PorchettaFunghi'),
          price:'',
          icon: "./img/newrounded.png",
          iconSlice: "./img/slice.png",
          alt:'Pizza icon'
        },
        {
          name: 'Quattro formaggi',
          description: this.$t('maxipizzas.QuattroFormaggi'),
          price:'',
          icon: "./img/newrounded.png",
          iconSlice: "./img/slice.png",
          alt:'Pizza icon'
        },
        {
          name: 'Suggestione',
          description: this.$t('maxipizzas.Suggestione'),
          price:'',
          icon: "./img/newrounded.png",
          iconSlice: "./img/slice.png",
          alt:'Pizza icon'
        },
      ]
    },

    paninis() {
      return [
        {
          name: 'Italiano',
          description: this.$t('paninis.Italiano'),
          price:'',
          icon: "./img/sanswitch.png",
          alt:'Pizza icon'
        },
        {
          name: 'Mortadella',
          description: this.$t('paninis.Mortadella'),
          price:'',
          icon: "./img/sanswitch.png",
          alt:'Pizza icon'
        },
        {
          name: 'Sopressa',
          description: this.$t('paninis.Soppressa'),
          price:'',
          icon: "./img/sanswitch.png",
          alt:'Pizza icon'
        },
        {
          name: 'Piccante',
          description: this.$t('paninis.Piccante'),
          price:'',
          icon: "./img/sanswitch.png",
          alt:'Pizza icon'
        },
        {
          name: 'Vegetariano',
          description: this.$t('paninis.Vegetariano'),
          price:'',
          icon: "./img/sanswitch.png",
          alt:'Pizza icon'
        },
        {
          name: 'Suggestione',
          description: this.$t('paninis.Suggestione'),
          price:'',
          icon: "./img/sanswitch.png",
          alt:'Pizza icon'
        },
      ]
    }
  }
}

</script>

<template>

<!-- Header section start-->
    <div class="relative isolate overflow-hidden bg-gradient-to-b h-screen from-indigo-100/20 pt-14">
        <img src="../assets/img/lavagna.webp" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-black shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
        <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div class="mx-auto m-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 class="text-6xl font-bold tracking-tight text-white sm:text-6xl main-title">L'Artigiano<br>della farina</h1>
                <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                    <p class="mt-6 text-lg leading-8 text-gray-300 take-away">TAKE-AWAY</p>
                    <p class="mt-6 text-xxl leading-8 text-gray-300 main-sub-title">{{ $t("header.subtitle") }}</p>
                    <div class="mt-10 flex items-center gap-x-6">
                        <a href="../assets/doc/pizza-vino-it.pdf" class="mr-2 flex items-center border-2 border-white text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300 w-auto">
                            <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full button-header" lang="it">{{ $t("header.download") }}</span>
                            <ChevronRightIcon class="ml-2 w-5 h-5 text-white" aria-hidden="true" />
                        </a>
                        <a type="button" href="tel:0032494693028" class="flex items-center border-2 border-white text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300 sm:mt-0 mt-4 w-auto">
                            <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full button-header" lang="it">{{ $t("header.call") }}</span>
                            <PhoneArrowUpRightIcon class="ml-2 w-5 h-5 text-white" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <transition appear @before-enter="slide">
                <img src="../assets/img/logoartigiano_1000.png" alt="logo-l'artigiano" class="mt-10  w-full max-w-lg object-cover sm:mt-10 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
                </transition>
            </div>
        </div>
    </div>
  <!-- Header section end-->



  <!-- Content section start-->
  <div class="bg-neutral-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">{{ $t("short.over") }}</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("short.title") }}</p>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("short.subtitle") }}</p>
      </div>
    </div>
    <div class="relative overflow-hidden pt-16">
      <div class="mx-auto px-0">
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 top-0 bg-gradient-to-b from-neutral-900 pt-[12%]" />
        </div>
        <img src="../assets/img/pizza-burratina.png" alt="App screenshot" class="mb-[-16%] rounded-xl shadow-2xl h-80 w-full sm:h-auto sm:w-full object-cover" />
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-neutral-900 pt-[7%]" />
        </div>
      </div>
    </div>

<!-- red pizza -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
      <div class="mx-auto max-w-2xl sm:text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl section-title" id="pizze-red">{{ $t("redpizzas.title") }}</p>
        <h3 class="text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">( classic 33cm pizza )</h3>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("redpizzas.subtitle") }}</p>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in redpizzas" :key="feature.name" class="relative pl-14">
          <dt class="font-semibold text-white pizza-name">
            <img :src="feature.icon" class="absolute top-1 left-1 h-8 w-8 sm:h-8 sm:w-8 text-red-500" :alt="feature.alt" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline pizza-desc">{{ feature.description }}</dd>
          <dd class="pizza-price"> {{ feature.price }}</dd>
        </div>
      </dl>
    </div>


    <!-- white pizzas -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center pt-16">
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("whitepizzas.title") }}</p>
        <h3 class="text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">( classic 33cm pizza )</h3>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("whitepizzas.subtitle") }}</p>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in whitepizzas" :key="feature.name" class="relative pl-14">
          <dt class="font-semibold text-white pizza-name">
            <img :src="feature.icon" class="absolute top-1 left-1 h-8 w-8 sm:h-12 sm:w-12 text-red-500" :alt="feature.alt" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline pizza-desc">{{ feature.description }}</dd>
          <dd class="pizza-price"> {{ feature.price }}</dd>
        </div>
      </dl>
    </div>


    <!-- maxi pizzas & slices -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center pt-16">
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("maxipizzas.title") }}</p>
        <h3 class="text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">( Maxi 50cm pizza or slice of it )</h3>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("maxipizzas.subtitle") }}</p>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in maxipizzas" :key="feature.name" class="relative pl-14">
          <dt class="font-semibold text-white pizza-name">
            <img :src="feature.icon" class="absolute top-1 left-1 h-8 w-8 sm:h-12 sm:w-12 text-red-500" :alt="feature.alt" aria-hidden="true" />
            <img :src="feature.iconSlice" class="absolute top-16 left-1 h-8 w-8 sm:h-12 sm:w-12 text-red-500" :alt="feature.alt" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline pizza-desc">{{ feature.description }}</dd>
          <dd class="pizza-price"> {{ feature.price }}</dd>
        </div>
      </dl>
    </div>

    <!-- paninis -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center pt-16">
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("paninis.title") }}</p>
        <h3 class="text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">( only for lunch )</h3>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("paninis.subtitle") }}</p>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in paninis" :key="feature.name" class="relative pl-14">
          <dt class="font-semibold text-white pizza-name">
            <img :src="feature.icon" class="absolute top-1 left-1 h-8 w-8 sm:h-12 sm:w-12 text-red-500" :alt="feature.alt" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline pizza-desc">{{ feature.description }}</dd>
          <dd class="pizza-price"> {{ feature.price }}</dd>
        </div>
      </dl>
    </div>


  </div>
  <!-- Content section end-->

  <!--  Carousel section-->

  <div class="bg-neutral-900 pb-14">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">{{ $t("secondShort.over") }}</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("secondShort.title") }}</p>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("secondShort.subtitle") }}</p>
      </div>
    </div>
  </div>

  <div class="bg-neutral-900 relative overflow-hidden">
    <div class="gallery-wrap" :style="{ backgroundImage: `url(${imagePath})` }">
      <div class="item" :style="{ backgroundImage: `url(${imagePath})` }"></div>
      <div class="item" :style="{ backgroundImage: `url(${imagePath})` }"></div>
      <div class="item" :style="{ backgroundImage: `url(${imagePath})` }"></div>
      <div class="item" :style="{ backgroundImage: `url(${imagePath})` }"></div>
      <div class="item" :style="{ backgroundImage: `url(${imagePath})` }"></div>
      <div class="item" :style="{ backgroundImage: `url(${imagePath})` }"></div>
    </div>
  </div>

  <!--  Carousel section-->

  <!--  Product start-->
  <div class="bg-neutral-900" :style="{ backgroundImage: `url(${carrelage})` }">
    <div class="mx-auto max-w-7xl px-6 py-12 sm:py-44 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">{{ $t("product.over") }}</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("product.title") }}</p>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("product.subtitle") }}</p>
      </div>
      <div class="mt-8 flow-root lg:mt-10">
        <div class=" flex flex-wrap justify-center sm:justify-between py-10">
          <div class="mt-4 sm:ml-8 flex justify-center flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0 ">
            <img class="h-24 sm:h-32" src="../assets/img/farine-caputo.webp" alt="Farine caputo" />
          </div>
          <div class="mt-4 sm:ml-8 flex justify-center flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0 img-veneti">
            <img class="h-24 sm:h-32" src="../assets/img/viniveneti.webp" alt="Vini veneti" />
          </div>
          <div class="mt-4 sm:ml-8 flex justify-center flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <img class="h-24 sm:h-32" src="../assets/img/pomodorinoDOP.webp" alt="Pomodorino DOP" />
          </div>
          <div class="mt-4 sm:ml-8 flex justify-center flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <img class="h-24 sm:h-32" src="../assets/img/Birra_peroni_s.r.l._logo.webp" alt="Birra Peroni" />
          </div>
        </div>
      </div>
    </div>
  </div>
<!--Produdt end -->

<!--Customer review start-->
  <div class="bg-neutral-900" :style="{ backgroundImage: `url(${imagePath})` }">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-44">
      <div class="mx-auto max-w-2xl sm:text-center mb-24">
        <a href="https://fr.tripadvisor.be/Restaurant_Review-g1136493-d19872077-Reviews-PizzaVino-Ixelles_Brussels.html"
           class="text-lg font-semibold leading-8 tracking-tight text-center justify-center flex border-2 border-red-500 mx-auto max-w-xs bg-transparent rounded-full text-red-500 before-title uppercase mb-5"
           target="_blank"
        >
          <span class="mt-0.5">{{ $t("review.over") }}</span>
          <ChevronRightIcon class="ml-2 w-5 h-5 mt-1.5 text-red-500" aria-hidden="true" />
        </a>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("review.title") }}</p>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("review.subtitle") }}</p>
      </div>
      <div class="-my-10">
        <div v-for="(review, reviewIdx) in reviews" :key="review.id" class="flex space-x-4 text-sm text-gray-500">
          <div class="flex-none py-10">
            <img :src="review.avatarSrc" :alt="review.alt" class="h-10 w-10 rounded-full bg-gray-100" />
          </div>
          <div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10']">
            <h3 class="font-medium text-red-500 review-author">{{ review.author }}</h3>
            <p>
              <time class="review-time" :datetime="review.datetime">{{ review.date }}</time>
            </p>

            <div class="mt-4 flex items-center">
              <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[review.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
            </div>
            <p class="sr-only">{{ review.rating }} out of 5 stars</p>

            <div class="prose prose-sm mt-4 max-w-none text-white review-content">
              <p>{{review.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- Customer review end-->

</template>

<script setup>
import {
  StarIcon, PhoneArrowUpRightIcon,ChevronRightIcon
} from '@heroicons/vue/20/solid'


const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateX(-400px)'
}

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    onComplete: done,
    delay: el.dataset.index * 0.5,
  })
}
const beforeSlide = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(400px)'
}

const slide = (el, done) => {
  gsap.from(el, {
    rotation: 180
  })
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    onComplete: done,
    delay: el.dataset.index * 0.1,
    rotation: 360,
  })
}

</script>
