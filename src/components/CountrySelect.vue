<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Country } from '../types'

const { country } = defineProps<{
  country: Country
}>()

const isHovered = ref(false)

const anyRead = computed(() =>
  country.books.reduce((read, book) => {
    read = read || !!book.read
    return read
  }, false),
)

// Will need to fill these in and remove this at some point
const hasBooks = computed(() => country.books.length > 0)
</script>

<template>
  <path
    stroke="white"
    stroke-width=".25"
    :fill="isHovered ? 'purple' : anyRead ? 'green' : hasBooks ? 'black' : 'gray'"
    :id="country.id"
    :title="country.title"
    :d="country.path"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
  </path>
</template>
