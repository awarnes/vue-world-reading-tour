<script setup lang="ts">
import countriesJson from '../assets/country-book-data.json'
import CountrySelect from './CountrySelect.vue'
import BookList from './BookList.vue'
import { computed, defineExpose, ref } from 'vue'

const countries = computed(() => countriesJson.filter((country) => country.display))

const dialog = ref<HTMLDialogElement>()
const countryId = ref('')
const countryName = ref('')
const countryBooks = ref([])

function showModal(country) {
  countryId.value = country.id
  countryName.value = country.title
  countryBooks.value = country.books
  dialog.value.showModal()
}

const scale = ref(1)
function zoomIn() {
  scale.value = clamp(scale.value + 0.5)
}
function zoomOut() {
  scale.value = clamp(scale.value - 0.5)
}

function clamp(num) {
  return Math.min(Math.max(num, 0.5), 3)
}

defineExpose({
  zoomIn,
  zoomOut,
})
</script>

<template>
  <div class="scrolling">
    <svg id="map" :transform="`scale(${scale}) translate(${50 * scale * 4},${50 * scale * 2})`">
      <g>
        <CountrySelect
          v-for="country in countries"
          :key="country.id"
          :country="country"
          @click="showModal(country)"
        />
      </g>
    </svg>
  </div>

  <dialog ref="dialog" @close="dialog.close()">
    <h3>{{ countryName }}</h3>
    <button @click="dialog.close()">Close</button>
    <BookList :books="countryBooks"></BookList>
  </dialog>
</template>

<style>
.scrolling {
  overflow: scroll;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

#map {
  width: 100%;
  height: 100%;
}
</style>
