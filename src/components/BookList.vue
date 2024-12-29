<script setup lang="ts">
import type { Book } from '../types'
const { books } = defineProps<{ books: Book[] }>()
</script>

<template>
  <ul>
    <li v-for="(book, index) in books" :key="index" :class="!!book.read ? 'read' : ''">
      <a
        :href="`https://libbyapp.com/search/multcolib/search/scope-auto/query-${encodeURI(book.title)}/page-1`"
        >{{ book.title }}</a
      >
      |
      <a
        :href="`https://libbyapp.com/search/multcolib/search/scope-auto/query-${encodeURI(book.author)}/page-1`"
        >{{ book.author }}</a
      >
    </li>
  </ul>
</template>

<style>
.read {
  list-style-image: url('../assets/check-mark.svg');
}
</style>
