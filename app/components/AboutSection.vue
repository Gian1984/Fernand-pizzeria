<template>
  <section class="bg-neutral-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">
          {{ $t('about.title') }}
        </h2>
        <p class="mt-6 text-lg leading-8 text-neutral-300 section-title-desc">
          {{ $t('about.text') }}
        </p>
      </div>

      <div class="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        <img
          v-for="n in 4"
          :key="n"
          :src="`/img/artigiano-${n}.webp`"
          :alt="$t('about.title')"
          loading="lazy"
          decoding="async"
          class="aspect-[4/5] w-full rounded-lg object-cover"
        />
      </div>
    </div>
  </section>
</template>
