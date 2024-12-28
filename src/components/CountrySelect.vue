<script setup lang="ts">
import { computed, ref } from 'vue'

type Country = {
  id: string
  title: string
  path: string
  books: {
    read: string | null
    [k: string]: string
  }[]
}

const { country } = defineProps<{
  country: Country
}>()

const isHovered = ref(false)
const anyRead = computed(() =>
  books.reduce((read, book) => {
    read = !!book.read
    return read
  }, false),
)

const emit = defineEmits<{
  (e: 'show-modal', country): void
}>()
</script>

<template>
  <path
    :fill="isHovered ? 'purple' : anyRead ? 'green' : 'black'"
    :id="country.id"
    :title="country.title"
    :d="country.path"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    @click="emit('show-modal', country)"
  >
  </path>
</template>
