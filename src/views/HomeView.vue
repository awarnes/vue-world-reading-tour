<script setup lang="ts">
import countries from '../assets/country-book-data.json'
import BookList from '../components/BookList.vue'
import FullMap from '../components/FullMap.vue'
import { ref } from 'vue'

const menu = ref()
const countryBooks = ref('')

const showModal = () => {
  menu.value.showModal()
}
</script>

<template>
  <img class="floating" src="../assets/menu.svg" @click.stop="showModal()" />
  <FullMap />
  <dialog ref="menu" @close="menu.close()">
    <label for="country-select"></label>
    <select id="country-select" v-model="countryId">
      <option>--Select Country--</option>
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
  width: 75px;
  height: 75px;
}

.floating:hover {
  background-color: aliceblue;
}
</style>
