<script setup lang="ts">
import { Calculator } from '@/models/calculator';
import TheWelcome from '../components/TheWelcome.vue'
import { ref, type Ref } from 'vue'
import CalculatorComponent from '@/components/calculator/CalculatorComponent.vue';
import HeroesComponent from '@/components/heroes/HeroesComponent.vue';
import ApodComponent from '@/components/apod/ApodComponent.vue';
import TrivialGame from '@/components/trivial/TrivialGame.vue';




</script>

<template>
  <main>

    <!-- <HeroesComponent/> -->
    <!-- <CalculatorComponent/> -->
     <!-- <ApodComponent/> -->
      <TrivialGame/>
  </main>
</template>

