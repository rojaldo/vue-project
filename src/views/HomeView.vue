<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

let message = ref('Hello, Vue 3 + Vite!')

let count = 0

const increment = () => {
  count++
  message.value = 'You clicked ' + count + ' times'
  console.log('You clicked ' + count + ' times');
  
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
     <h1>Hola mundo!</h1>
     <h2>{{ message }}</h2>
     <h4>{{ count }}</h4>
      <button @click="increment">Increment</button>
  </main>
</template>
