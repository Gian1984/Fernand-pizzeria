<script>
import gsap from 'gsap'
</script>

<template>

<!-- Header section start-->
    <div class="relative isolate overflow-hidden bg-gradient-to-b h-screen from-indigo-100/20 pt-14">
        <img src="../assets/img/lavagna.webp" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-black shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
        <div class="mx-auto max-w-7xl px-6 py-0 sm:py-40 lg:px-8">
            <div class="mx-auto m-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 class="text-6xl font-bold tracking-tight text-white sm:text-6xl main-title">L'Artigiano<br>della farina</h1>
                <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                    <p class="mt-6 sm:mt-6 text-lg leading-8 text-gray-300 take-away">TAKE-AWAY</p>
                    <p class="mt-6 sm:mt-6 text-xxl leading-8 text-gray-300 main-sub-title">{{ $t("header.subtitle") }}</p>
                    <div class="mt-6 mb-12 sm:mt-10 flex items-center gap-x-6">
                        <router-link to="/menu" class="mr-2 flex items-center border-2 border-white text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300 w-auto">
                            <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full button-header" lang="it">{{ $t("header.download") }}</span>
                            <ChevronRightIcon class="ml-2 sm:w-5 sm:h-5 w-3 h-3 text-white" aria-hidden="true" />
                        </router-link>
                        <a type="button" href="tel:0032499646269" class="flex items-center border-2 border-white text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300 w-auto">
                            <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full button-header" lang="it">{{ $t("header.call") }}</span>
                            <PhoneArrowUpRightIcon class="ml-2 sm:w-5 sm:h-5 w-3 h-3 text-white" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <transition appear @before-enter="slide">
                <img src="../assets/img/logoartigiano_1000.png" alt="logo-l'artigiano" class="mt-2 sm:mt-10  w-full max-w-lg object-cover sm:mt-10 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-24" id="logo-artigiano" />
                </transition>
            </div>
        </div>
    </div>
  <!-- Header section end-->

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
