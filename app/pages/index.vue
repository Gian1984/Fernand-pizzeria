<script setup>
import { PhoneArrowUpRightIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import gsap from 'gsap'
import lavagna from '~/assets/img/lavagna.webp'
import logoArtigiano from '~/assets/img/logoartigiano_1000.png'

usePageSeo({
  path: '/',
  title: "L'Artigiano della Farina - Pizzeria artisanale à Ixelles",
  description: "Pizzeria et boulangerie artisanale à Ixelles (Bruxelles). Pizzas, ciabatta et take-away préparés avec passion par L'Artigiano della Farina, Pl. Fernand Cocq.",
})

// Hook JS della <transition> sul logo: gira solo client-side dopo l'hydration.
const slide = (el, done) => {
  gsap.from(el, {
    rotation: 180,
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

<template>

  <div class="bg-black">
    <div class="relative isolate overflow-hidden">
      <img :src="lavagna" alt="l'artigiano background img" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
      <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div class="px-6 lg:px-0 lg:pt-4">
          <div class="mx-auto max-w-2xl">
            <div class="max-w-lg">
              <h1 class="text-6xl font-bold tracking-tight text-white sm:text-6xl main-title">L'Artigiano<br>della farina</h1>
              <p class="mt-6 sm:mt-6 text-lg leading-8 text-gray-300 take-away">TAKE-AWAY</p>
              <p class="mt-6 sm:mt-6 text-xxl leading-8 text-gray-300 main-sub-title">{{ $t("header.subtitle") }}</p>
              <div class="mt-6 mb-12 sm:mt-10 flex items-center gap-x-6 xl:col-end-1 xl:row-start-1">
                <NuxtLink to="/menu" class="mr-2 flex items-center border-2 border-white text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300 w-auto">
                  <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full button-header" lang="it">{{ $t("header.download") }}</span>
                  <ChevronRightIcon class="ml-2 sm:w-5 sm:h-5 w-3 h-3 text-white" aria-hidden="true" />
                </NuxtLink>
                <a type="button" href="tel:0032499646269" class="flex items-center border-2 border-white text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300 w-auto">
                  <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full button-header" lang="it">{{ $t("header.call") }}</span>
                  <PhoneArrowUpRightIcon class="ml-2 sm:w-5 sm:h-5 w-3 h-3 text-white" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-black ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true" />
              <div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
              <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <transition appear @before-enter="slide">
                  <img :src="logoArtigiano" alt="logo-l'artigiano" class="mt-2 w-full max-w-lg object-cover sm:mt-10 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-24" id="logo-artigiano" />
                </transition>
                <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true" />
              </div>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-24 sm:h-32" />
    </div>
  </div>

  <AboutSection />

</template>
