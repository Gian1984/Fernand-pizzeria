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
</template>