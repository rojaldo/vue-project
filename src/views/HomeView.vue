<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

let display = ref('')

const setValue = (input: number | string) => {
  display.value += input
}

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
     <h1>Hola mundo!</h1>
     <h2>{{ display }}</h2>
      <button @click="setValue(1)">1</button>
      <button @click="setValue(2)">2</button>
      <button @click="setValue('+')">+</button>
  </main>
</template>
