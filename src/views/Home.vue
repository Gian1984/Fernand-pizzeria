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
  <div class="relative isolate overflow-hidden bg-gray-900 py-36 sm:py-36">
    <img src="../assets/img/lavagna.webp" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
    <div class="mx-auto max-w-7xl px-6 lg:px-8 flex header-content flex items-center justify-center">
      <div class="mx-auto max-w-6xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl main-title">{{ $t("header.title") }}</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300 take-away">TAKE-AWAY</p>
        <p class="mt-6 text-xxl leading-8 text-gray-300 main-sub-title">{{ $t("header.subtitle") }}</p>
        <div class="flex mt-10">
        <a href="../assets/doc/pizza-vino-it.pdf" class="mr-2 flex items-center border-2 border-white text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
          <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full button-header" lang="it">{{ $t("header.download") }}</span>
          <ChevronRightIcon class="ml-2 w-5 h-5 text-white" aria-hidden="true" />
        </a>
        <a type="button" href="tel:0032494693028" class="flex items-center border-2 border-white text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
          <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full button-header" lang="it">{{ $t("header.call") }}</span>
          <PhoneArrowUpRightIcon class="ml-2 w-5 h-5 text-white" aria-hidden="true" />
        </a>
        </div>
      </div>
      <div class="mx-auto mt-16 flex sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:flex-none xl:ml-32 items-center">
        <div class="max-w-2xl flex-none sm:max-w-md mx-auto">
          <transition appear @before-enter="slide">
          <div class="w-[25rem] sm:w-[30rem]">
            <img src="../assets/img/trancioheader.png" alt="trancio nel cartone">
        </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
  <!-- Header section end-->

  <!-- pizza vino call to action start-->
  <div class="bg-neutral-900 xl:pb-12">
    <div class="bg-neutral-800 pb-20 sm:pb-24 xl:pb-0" :style="{ backgroundImage: `url(${carrelage})` }">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row">
        <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
          <div class="relative h-full md:-mx-8 xl:mx-0 aspect-auto">
            <img class="inset-0 h-full w-full xl:h-auto w-full rounded-2xl bg-neutral-700 object-cover shadow-2xl p-1" src="../assets/img/inforna.webp" alt="pizza vino logo" />
          </div>
        </div>
        <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
          <figure class="relative isolate pt-6 sm:pt-12">
            <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute top-0 left-0 -z-10 h-32 stroke-red-500">
              <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
              <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
            </svg>
            <blockquote class="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9 pizza-vino-cta-title">
              <p>{{ $t("cta.description") }}</p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  </div>
  <!-- pizza vino call to action end-->



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
