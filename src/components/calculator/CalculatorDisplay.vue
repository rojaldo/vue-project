<template>
    <div class="calc-text">
      <p name="user-input" id="user-input">{{ display }}</p>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
const props = defineProps<{
    display: string
}>()

</script>

<style scoped>

.calc-text p {
  width: 100%;
  font-size: 3.5rem;
  text-align: end;
  background: transparent;
  color: #333333;
  border: none;
  outline: none;
  word-wrap: break-word;
  word-break: break-all;
}
</style>