<script setup lang="ts">
import countriesJson from '../assets/country-book-data.json'
import CountrySelect from './CountrySelect.vue'
import BookList from './BookList.vue'
import { computed, ref } from 'vue'

const countries = computed(() => countriesJson.filter((country) => country.display))

const dialog = ref<HTMLDialogElement>()
const countryId = ref('')
const countryName = ref('')
const books = computed(() => countriesJson.find((country) => country.id === countryId.value)?.books)

const showModal = (country) => {
  countryId.value = country.id
  countryName.value = country.title
  dialog.value.showModal()
}
</script>

<template>
  <svg id="map">
    <g>
      <CountrySelect
        v-for="country in countries"
        :key="country.id"
        :country="country"
        @show-modal="showModal"
      />
    </g>
  </svg>

  <dialog ref="dialog" @close="dialog.close()">
    <h3>{{ countryName }}</h3>
    <button @click="dialog.close()">Close</button>
    <BookList :books="books"></BookList>
  </dialog>
</template>

<style scoped>
#map {
  min-width: 1024px;
  min-height: 824px;
}
</style>
