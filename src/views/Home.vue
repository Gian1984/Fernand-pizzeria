<template>

<!-- Header section start-->
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img src="public/img/header.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097 845" aria-hidden="true" class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
      <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
      <defs>
        <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097 845" aria-hidden="true" class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0">
      <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
      <defs>
        <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
      </div>
    </div>
  </div>
  <!-- Header section end-->




  <!-- Content section start-->
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-red-400">Everything you need</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No server? No problem.</p>
        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
      </div>
    </div>
    <div class="relative overflow-hidden pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <img src="public/img/pizza-burratina.png" alt="App screenshot" class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" width="2432" height="1442" />
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
        </div>
      </div>
    </div>

<!-- red pizza -->
    <h2 class="text-3xl font-bold tracking-tight text-white my-12 text-center">Pizze Rosse</h2>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in redpizzas" :key="feature.name" class="relative pl-14">
          <dt class="font-semibold text-white">
            <img :src="feature.icon" class="absolute top-1 left-1 h-12 w-12 text-red-500" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline">{{ feature.description }}</dd>
          <dd class="price">€ {{ feature.price }}</dd>
        </div>
      </dl>
    </div>

    <!-- white pizza -->
    <h2 class="text-3xl font-bold tracking-tight text-white my-12 text-center">Pizze bianche</h2>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in whitepizzas" :key="feature.name" class="relative pl-14">
          <dt class="font-semibold text-white">
            <img :src="feature.icon" class="absolute top-1 left-1 h-12 w-12 text-red-500" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline">{{ feature.description }}</dd>
          <dd class="price">€ {{ feature.price }}</dd>
        </div>
      </dl>
    </div>
  </div>
<!-- Content section end-->

<!--  Product start-->
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl py-16 px-6 sm:py-20 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-center text-white">The world's most innovative companies use our app</h2>
      <div class="mt-8 flow-root lg:mt-10">
        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
          <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <img class="h-24" src="public/img/farine-caputo.png" alt="Mirage" />
          </div>
          <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <img class="h-24" src="public/img/viniveneti.png" alt="StaticKit" />
          </div>
          <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <img class="h-24" src="public/img/pomodorinoDOP.png" alt="Transistor" />
          </div>
          <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <img class="h-24" src="public/img/Birra_peroni_s.r.l._logo.png" alt="Workcation" />
          </div>
        </div>
      </div>
    </div>
  </div>
<!--Produdt end -->

<!--Customer review start-->
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-white mb-12 text-center">Votre avis est très important pour nous!</h2>

      <div class="-my-10">
        <div v-for="(review, reviewIdx) in reviews" :key="review.id" class="flex space-x-4 text-sm text-gray-500">
          <div class="flex-none py-10">
            <img :src="review.avatarSrc" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
          </div>
          <div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10']">
            <h3 class="font-medium text-gray-900">{{ review.author }}</h3>
            <p>
              <time :datetime="review.datetime">{{ review.date }}</time>
            </p>

            <div class="mt-4 flex items-center">
              <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[review.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
            </div>
            <p class="sr-only">{{ review.rating }} out of 5 stars</p>

            <div class="prose prose-sm mt-4 max-w-none text-gray-500" v-html="review.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- Customer review end-->

</template>

<script setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  StarIcon
} from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: "public/img/pizza-green.png",
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: "public/img/pizza-white.png",
  },
  {
    name: 'Simple queues.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: "public/img/pizza-red.png",
  },
  {
    name: 'Advanced security.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: "public/img/pizza-green.png",
  },
  {
    name: 'Powerful API.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: "public/img/pizza-white.png",
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: "public/img/pizza-red.png",
  },
]

const redpizzas = [
  { name: 'Margherita', description: 'Tomate, Basilic et Mozzarella.', price:'10,00', icon: "public/img/pizza-green.png" },
  { name: 'Regina', description: 'Tomate, Basilic et Mozzarella de Bufflonne.', price:'14,00', icon: "public/img/pizza-white.png" },
  { name: 'Principessa', description: 'Tomate, Basilic et Scamorza fumée*. ( Fromage typique italien )', price:'12,00' , icon: "public/img/pizza-red.png"},
  { name: 'Burrata', description: 'Tomate, Basilic, Tomates Datterini, Burratina d\'Andria*. (  Sœur de la mozzarella, un tendre fromage au lait de vache avec, en son cœur, une épaisse crème de fromage frais )', price:'17,00', icon: "public/img/pizza-green.png" },
  { name: 'Marinara', description: 'Tomate, Ail, Origan et Basilic.', price:'9,00', icon: "public/img/pizza-white.png" },
  { name: 'Rucola Reggiano', description: 'Tomate, Mozzarella, Roquette et Parmigiano Reggiano.', price:'13,00', icon: "public/img/pizza-red.png" },
  { name: 'Porchetta Funghi', description: 'Tomate, Basilic, Mozzarella, Porchetta d\'Ariccia* et Champignons. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l\'ensemble du territoire la commune d\'Ariccia )', price:'15,00', icon: "public/img/pizza-green.png" },
  { name: 'Quattro Stagioni', description: 'Tomate, Basilic, Mozzarella, Porchetta d\'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l\'ensemble du territoire la commune d\'Ariccia )', price:'16,00', icon: "public/img/pizza-white.png" },
  { name: 'Napoli', description: 'Tomate, Mozzarella, Câpres, Filets d\'Anchois de Cetara et Origan.', price:'14,00', icon: "public/img/pizza-red.png" },
  { name: 'Siciliana', description: 'Tomate, Basilic, Mozzarella, Câpres, Filets d\'Anchois de Cetara, Olives Noires et Ail.', price:'15,00', icon: "public/img/pizza-green.png" },
  { name: 'Capricciosa', description: 'Tomate, Basilic, Mozzarella, Porchetta d\'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l\'ensemble du territoire la commune d\'Ariccia )', price:'16,00', icon: "public/img/pizza-white.png" },
  { name: 'Diavola', description: 'Tomate, Basilic, Mozzarella et \'Nduja*. ( Saucisse de porc épicée avec du piment fabriquée en Italie, à l\'origine en Calabre )', price:'14,50', icon: "public/img/pizza-red.png" },
  { name: 'Calabrese', description: 'Tomate, Basilic, Scamorza fumée*, Salami épicé, Oignons rouges de Tropea et Olives Noires. ( Fromage typique italien )', price:'17,00', icon: "public/img/pizza-green.png" },
  { name: 'Boscaiola', description: 'Tomate, Basilic, Scamorza fumée*, Mascarpone, Champignons, Roquette et copeaux de Parmigiano Reggiano. ( Fromage typique italien )', price:'15,00', icon: "public/img/pizza-white.png" },
  { name: 'Bresaola e tartufo', description: 'Tomate, Mozzarella, Roquette, Bresaola de Punta d\'Anca, copeaux de Grana Padano* et Truffe Noire. ( Fromage typique italien )', price:'20,00', icon: "public/img/pizza-red.png" },
  { name: 'Crudaiola', description: 'Tomate, Roquette, Culatello*, Copeaux de Grana Padano, Crème Burrata, Tomates Datterini, Basilic et Origan. ( Il s\'agit d\'un jambon cru salé et séché obtenu à partir de la cuisse de porc  )', price:'19,00', icon: "public/img/pizza-green.png" },
  { name: 'Vegana', description: 'Tomate, Mélange de légumes, Roquette et Tomates séchées.', price:'14,00', icon: "public/img/pizza-white.png" },
  { name: 'Vegetariana', description: 'Tomate, Mozzarella et Mélange de légumes.', price:'15,00', icon: "public/img/pizza-red.png" },
  { name: 'Calzone', description: 'Surprise du pizzaiolo!', price:'18,00', icon: "public/img/pizza-green.png" },
]

const whitepizzas=[
  { name: 'Salsiccia Friarelli', description: 'Mozzarella, Basilic, Saucisse and Friarielli*. ( Brocoli-rave ou rapini )', price:'16,00', icon: "public/img/pizza-green.png" },
  { name: '4 Formaggi', description: 'Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic.', price:'15,00', icon: "public/img/pizza-white.png" },
  { name: 'Fresca', description: 'Mozzarella, Tomates datterini jaunes et rouges, Roquette et Copeaux de Parmesan.', price:'15,00', icon: "public/img/pizza-red.png" },
  { name: 'Patate & Tartufo', description: 'Mozzarella, Basilic, Pommes de terre bouillies et Truffe Noire.', price:'20,00', icon: "public/img/pizza-green.png" },
  { name: 'Mortadella', description: 'Mozzarella, Roquette, Mortadelle, Copeaux de Pecorino Romano*, Pesto de tomates séchées et Pistaches grillées. (  Fromage traditionnel à base de lait entier de brebis, à pâte pressée cuite )', price:'19,00', icon: "public/img/pizza-white.png" },
  { name: 'Genovese', description: 'Mozzarella, Pesto Génois, Tomates jaunes et rouges de Piennolo del Vesuvio, Copeaux de Ricotta* et Pignons de pin grillés. ( Fromage à pâte fraîche )', price:'19,00', icon: "public/img/pizza-red.png" },
]

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    date: 'July 16, 2021',
    datetime: '2021-07-16',
    author: 'Emily Selman',
    avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  // More reviews...
]
</script>