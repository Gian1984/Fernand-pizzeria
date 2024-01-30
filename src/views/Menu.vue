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
                    price: '10,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Regina',
                    description: this.$t('redpizzas.Regina'),
                    price: '14,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Principessa',
                    description: this.$t('redpizzas.Principessa'),
                    price: '12,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Burrata',
                    description: this.$t('redpizzas.Burrata'),
                    price: '17,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Marinara',
                    description: this.$t('redpizzas.Marinara'),
                    price: '9,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Rucola Reggiano',
                    description: this.$t('redpizzas.RucolaReggiano'),
                    price: '13,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Prosciutto Funghi',
                    description: this.$t('redpizzas.ProsciuttoFunghi'),
                    price: '15,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Napoli',
                    description: this.$t('redpizzas.Napoli'),
                    price: '14,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Siciliana',
                    description: this.$t('redpizzas.Siciliana'),
                    price: '15,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Capricciosa',
                    description: this.$t('redpizzas.Capricciosa'),
                    price: '16,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Diavola',
                    description: this.$t('redpizzas.Diavola'),
                    price: '14,50',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                  name: 'Diavola 2.0',
                  description: this.$t('redpizzas.Diavola2'),
                  price: '18,00',
                  icon: "./img/newrounded.png",
                  alt:'Pizza icon'
                },
                {
                    name: 'Calabrese',
                    description: this.$t('redpizzas.Calabrese'),
                    price: '17,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Boscaiola',
                    description: this.$t('redpizzas.Boscaiola'),
                    price: '15,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Bresaola e tartufo',
                    description: this.$t('redpizzas.BresaolaTartufo'),
                    price: '20,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Crudaiola',
                    description: this.$t('redpizzas.Crudaiola'),
                    price: '19,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Vegana',
                    description: this.$t('redpizzas.Vegana'),
                    price: '14,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Vegetariana',
                    description: this.$t('redpizzas.Vegetariana'),
                    price: '15,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Calzone',
                    description: this.$t('redpizzas.Calzone'),
                    price: '18,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
            ]
        },


        whitepizzas() {
            return [
                {
                    name: 'Salsiccia Friarelli',
                    description: this.$t('whitepizzas.SalsicciaFriarelli'),
                    price:'16,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: '4 Formaggi',
                    description: this.$t('whitepizzas.QuattroFormaggi'),
                    price:'15,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Patate & Tartufo',
                    description: this.$t('whitepizzas.PatateTartufo'),
                    price:'20,00',
                    icon: "./img/newrounded.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Mortadella',
                    description: this.$t('whitepizzas.Mortadella'),
                    price:'19,00',
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
                    price:'23,00',
                    priceSlice:'4,00',
                    icon: "./img/newrounded.png",
                    iconSlice: "./img/slice.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Diavola',
                    description: this.$t('maxipizzas.Diavola'),
                    price:'28,00',
                    priceSlice:'5,00',
                    icon: "./img/newrounded.png",
                    iconSlice: "./img/slice.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Porchetta funghi',
                    description: this.$t('maxipizzas.PorchettaFunghi'),
                    price:'28,00',
                    priceSlice:'5,00',
                    icon: "./img/newrounded.png",
                    iconSlice: "./img/slice.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Quattro formaggi',
                    description: this.$t('maxipizzas.QuattroFormaggi'),
                    price:'28,00',
                    priceSlice:'5,00',
                    icon: "./img/newrounded.png",
                    iconSlice: "./img/slice.png",
                    alt:'Pizza icon'
                },
                {
                    name: 'Suggestione',
                    description: this.$t('maxipizzas.Suggestione'),
                    price:'34,00',
                    priceSlice:'6,00',
                    icon: "./img/newrounded.png",
                    iconSlice: "./img/slice.png",
                    alt:'Pizza icon'
                },
            ]
        },

        paninis() {
            return [
                {
                    name: 'Finocchiona',
                    description: this.$t('paninis.Finocchiona'),
                    price:'10,00',
                    icon: "./img/sanswitch.png",
                    alt:'Paninis Finocchiona icon'
                },
                {
                    name: 'Speck',
                    description: this.$t('paninis.Speck'),
                    price:'10,00',
                    icon: "./img/sanswitch.png",
                    alt:'Paninis Speck icon'
                },
                {
                    name: 'Piccante',
                    description: this.$t('paninis.Piccante'),
                    price:'10,00',
                    icon: "./img/sanswitch.png",
                    alt:'Paninis Piccante icon'
                },
                {
                    name: 'Tricolore',
                    description: this.$t('paninis.Tricolore'),
                    price:'11,00',
                    icon: "./img/sanswitch.png",
                    alt:'Paninis Tricolore icon'
                },
                {
                    name: 'Vegetariano',
                    description: this.$t('paninis.Vegetariano'),
                    price:'9,00',
                    icon: "./img/sanswitch.png",
                    alt:'Paninis Vegetariano icon'
                },
                {
                    name: 'Bresaola e Tartufo',
                    description: this.$t('paninis.BresaolaTartufo'),
                    price:'12,00',
                    icon: "./img/sanswitch.png",
                    alt:'Paninis icon'
                },
                {
                  name: 'Mortadella',
                  description: this.$t('paninis.Mortadella'),
                  price:'10,00',
                  icon: "./img/sanswitch.png",
                  alt:'Paninis Mortadella icon'
                },
                {
                  name: 'Caprese',
                  description: this.$t('paninis.Caprese'),
                  price:'9,00',
                  icon: "./img/sanswitch.png",
                  alt:'Paninis Caprese icon'
                },
                {
                  name: 'Cotto',
                  description: this.$t('paninis.Cotto'),
                  price:'10,00',
                  icon: "./img/sanswitch.png",
                  alt:'Paninis Cotto icon'
                },
                {
                  name: 'Dolce',
                  description: this.$t('paninis.Dolce'),
                  price:'10,00',
                  icon: "./img/sanswitch.png",
                  alt:'Paninis Dolce icon'
                },
                {
                  name: 'Vegan',
                  description: this.$t('paninis.Vegan'),
                  price:'10,00',
                  icon: "./img/sanswitch.png",
                  alt:'Paninis Vegan icon'
                },

                {
                  name: 'Suggestione',
                  description: this.$t('paninis.Suggestione'),
                  price:'',
                  icon: "./img/sanswitch.png",
                  alt:'Paninis Caprese icon'
                },
            ]
        }
    }
}

</script>

<template>
  <!-- Content section start-->
    <div class="bg-neutral-900 py-6 sm:py-32">

        <!-- red pizza -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
            <div class="mx-auto max-w-2xl text-center">
                <p class="text-3xl font-bold tracking-tight text-white sm:text-4xl section-title" id="pizze-red">{{ $t("redpizzas.title") }}</p>
                <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">( classic 33cm pizza )</h3>
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
                    <dd class="pizza-price"> {{ feature.price }} †</dd>
                </div>
            </dl>
        </div>


        <!-- white pizzas -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center pt-16">
                <p class="text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("whitepizzas.title") }}</p>
                <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">( classic 33cm pizza )</h3>
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
                    <dd class="pizza-price"> {{ feature.price }} €</dd>
                </div>
            </dl>
        </div>


        <!-- maxi pizzas & slices -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
            <div class="mx-auto max-w-2xl text-center pt-16">
                <p class="text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("maxipizzas.title") }}</p>
                <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">( Maxi 50cm pizza or slice of it )</h3>
            </div>
        </div>
        <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                <div v-for="feature in maxipizzas" :key="feature.name" class="relative pl-14">
                    <dt class="font-semibold text-white pizza-name">
                        <img :src="feature.icon" class="absolute top-1 left-1 h-8 w-8 sm:h-12 sm:w-12 text-red-500" :alt="feature.alt" aria-hidden="true" />
                        <img :src="feature.iconSlice" class="absolute origin-top-right top-10 sm:top-16 left-1 h-8 w-8 sm:h-12 sm:w-12 text-red-500" :alt="feature.alt" aria-hidden="true" />
                        {{ feature.name }}
                    </dt>
                    {{ ' ' }}
                    <dd class="inline pizza-desc">{{ feature.description }}</dd>
                    <dd class="pizza-price">Maxi: {{ feature.price }} €</dd>
                    <dd class="pizza-price">Slice: {{ feature.priceSlice}} €</dd>
                </div>
            </dl>
        </div>

        <!-- paninis -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center pt-16">
                <p class="text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">{{ $t("paninis.title") }}</p>
                <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-red-500 before-title uppercase">( only for lunch )</h3>
                <p class="text-lg leading-8 text-neutral-300 section-title-desc">{{ $t("paninis.subtitle") }}</p>
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
                    <dd class="pizza-price"> {{ feature.price }} €</dd>
                </div>
            </dl>
        </div>



    </div>
  <!-- Content section end-->
</template>
