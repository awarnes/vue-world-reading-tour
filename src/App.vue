<script setup lang="ts">
import countries from './assets/country-book-data.json'
import BookList from './components/BookList.vue'
import FullMap from './components/FullMap.vue'
import { ref } from 'vue'

const menu = ref()
const map = ref()
const countryBooks = ref([])

function showModal() {
  menu.value.showModal()
}

function closeModal() {
  menu.value.close()
  countryBooks.value = []
}

function zoomIn() {
  map.value.zoomIn()
}

function zoomOut() {
  map.value.zoomOut()
}
</script>

<template>
  <div class="floating">
    <img class="highlight" src="./assets/menu.svg" @click.stop="showModal()" />
    <img class="highlight" src="./assets/plus.svg" @click="zoomIn" />
    <img class="highlight" src="./assets/minus.svg" @click="zoomOut" />
  </div>

  <FullMap ref="map" />

  <dialog ref="menu" @close="closeModal">
    <label for="country-select">Select a country</label>
    <br />
    <select id="country-select" v-model="countryBooks">
      <option :value="[]">--Select a country--</option>
      <option v-for="country in countries" :key="country.id" :value="country.books">
        {{ country.title }}
      </option>
    </select>
    <BookList :books="countryBooks" />
  </dialog>
</template>

<style>
.floating {
  position: absolute;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
}

.highlight:hover {
  background-color: aliceblue;
}
</style>
