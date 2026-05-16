<script setup>
import { computed } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'
import { googleReviews, ratings, GOOGLE_REVIEWS_URL } from '~/data/reviews'

const { t } = useI18n({ useScope: 'global' })

// Due righe: indici pari e dispari. Ogni track è duplicato (x2) per il
// loop infinito senza salti (translateX -50% = esattamente una copia).
const rowOne = computed(() => googleReviews.filter((_, i) => i % 2 === 0))
const rowTwo = computed(() => googleReviews.filter((_, i) => i % 2 === 1))
const rowOneLoop = computed(() => [...rowOne.value, ...rowOne.value])
const rowTwoLoop = computed(() => [...rowTwo.value, ...rowTwo.value])
</script>

<template>
  <section class="bg-neutral-900 py-16 sm:py-20 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Header -->
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-3xl font-bold tracking-tight text-white sm:text-4xl section-title">
          {{ $t('reviews.title') }}
        </p>
        <p class="mt-4 text-lg text-neutral-300 section-title-desc">
          {{ $t('reviews.subtitle') }}
        </p>
      </div>

      <!-- Rating aggregati -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <div v-for="r in ratings" :key="r.platform" class="flex items-center gap-x-3">
          <span class="text-white font-semibold review-author">{{ r.platform }}</span>
          <span class="text-white text-lg before-title">{{ r.score }}/5</span>
          <span class="flex">
            <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 text-red-500" aria-hidden="true" />
          </span>
          <span class="text-neutral-400 text-sm review-time">{{ r.count }} {{ $t('reviews.count') }}</span>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-8 flex justify-center">
        <a
          :href="GOOGLE_REVIEWS_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center border-2 border-white text-white bg-transparent rounded-full px-5 py-1.5 text-sm uppercase tracking-wide hover:bg-white hover:text-black button-cta"
        >
          {{ $t('reviews.all') }}
        </a>
      </div>
    </div>

    <!-- Slider: due righe, direzioni opposte -->
    <div class="mt-12 space-y-6">
      <div class="marquee">
        <ul class="marquee__track marquee__track--left">
          <li
            v-for="(review, idx) in rowOneLoop"
            :key="'r1-' + idx"
            class="marquee__card rounded-lg border border-neutral-700 bg-black/40 p-5"
          >
            <div class="flex items-center justify-between">
              <span class="text-white review-author">{{ review.author }}</span>
              <span class="flex">
                <StarIcon
                  v-for="i in 5"
                  :key="i"
                  class="h-4 w-4"
                  :class="i <= review.rating ? 'text-red-500' : 'text-neutral-600'"
                  aria-hidden="true"
                />
              </span>
            </div>
            <p class="mt-1 text-xs text-neutral-400 review-time">
              {{ $t('reviews.from') }} · {{ review.timeAgo }}
            </p>
            <p class="mt-3 text-sm text-neutral-300 review-content line-clamp-4">
              {{ review.text }}
            </p>
            <a
              :href="GOOGLE_REVIEWS_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-2 inline-block text-sm text-red-500 hover:text-red-400"
            >… {{ $t('reviews.more') }}</a>
          </li>
        </ul>
      </div>

      <div class="marquee">
        <ul class="marquee__track marquee__track--right">
          <li
            v-for="(review, idx) in rowTwoLoop"
            :key="'r2-' + idx"
            class="marquee__card rounded-lg border border-neutral-700 bg-black/40 p-5"
          >
            <div class="flex items-center justify-between">
              <span class="text-white review-author">{{ review.author }}</span>
              <span class="flex">
                <StarIcon
                  v-for="i in 5"
                  :key="i"
                  class="h-4 w-4"
                  :class="i <= review.rating ? 'text-red-500' : 'text-neutral-600'"
                  aria-hidden="true"
                />
              </span>
            </div>
            <p class="mt-1 text-xs text-neutral-400 review-time">
              {{ $t('reviews.from') }} · {{ review.timeAgo }}
            </p>
            <p class="mt-3 text-sm text-neutral-300 review-content line-clamp-4">
              {{ review.text }}
            </p>
            <a
              :href="GOOGLE_REVIEWS_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-2 inline-block text-sm text-red-500 hover:text-red-400"
            >… {{ $t('reviews.more') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  overflow: hidden;
}

.marquee__track {
  display: flex;
  gap: 1.5rem;
  width: max-content;
  padding: 0 0.75rem;
}

.marquee__track--left {
  animation: marquee-left 70s linear infinite;
}

.marquee__track--right {
  animation: marquee-right 70s linear infinite;
}

/* Pausa al passaggio del mouse */
.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__card {
  width: 20rem;
  flex-shrink: 0;
}

@keyframes marquee-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes marquee-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}

/* Accessibilità: chi preferisce meno animazioni può scorrere a mano */
@media (prefers-reduced-motion: reduce) {
  .marquee {
    overflow-x: auto;
  }
  .marquee__track {
    animation: none;
  }
}
</style>
