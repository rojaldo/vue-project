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
      <div
        class="container"
      >
        <div id="calculator">
          <CalculatorDisplay :display="display" />
          <CalculatorKeyboard @changeValue="handleClick" />
        </div>
      </div>
      

    </main>
</template>

<style>

#calculator {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 50px;
}
</style>
