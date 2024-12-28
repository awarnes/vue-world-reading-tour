<script setup lang="ts">
const { books } = defineProps<{ books: { id: string; title: string; author: string }[] }>()
</script>

<template>
  <ul>
    <li v-for="book in books" :key="book.id">
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
