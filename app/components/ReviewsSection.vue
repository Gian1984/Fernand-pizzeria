<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'
import { googleReviews, ratings, GOOGLE_REVIEWS_URL } from '~/data/reviews'

const { t } = useI18n({ useScope: 'global' })

// Tronca al confine di parola; il testo completo è su Google ("… More").
function truncate(text, max = 150) {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  return cut.slice(0, cut.lastIndexOf(' ')).trim()
}
</script>

<template>
  <section class="bg-neutral-900 py-16 sm:py-20">
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

      <!-- Griglia recensioni -->
      <ul class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(review, idx) in googleReviews"
          :key="idx"
          class="rounded-lg border border-neutral-700 bg-black/40 p-5"
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
          <p class="mt-3 text-sm text-neutral-300 review-content">
            {{ truncate(review.text) }}<!--
            -->{{ truncate(review.text) !== review.text ? '…' : '' }}
            <a
              :href="GOOGLE_REVIEWS_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="text-red-500 hover:text-red-400 whitespace-nowrap"
            >{{ $t('reviews.more') }}</a>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
