<script setup lang="ts">
import { Calculator } from '@/models/calculator';
import { ref } from 'vue';
import CalculatorDisplay from './CalculatorDisplay.vue';
import CalculatorKeyboard from './CalculatorKeyboard.vue';

let display = ref('')

let calculator = new Calculator()

const handleClick = (input: number | string) => {
  if (typeof input === 'number') {
    calculator.handleNumber(input)
  } else if (typeof input === 'string') {
    calculator.handleSymbol(input)
  }
  display.value = calculator.displayString
}
</script>

<template>
    <main>

      <CalculatorDisplay :display="display" />
      <CalculatorKeyboard @changeValue="handleClick" />

    </main>
</template>

<style>

</style>
