<script setup lang="ts">
import { Calculator } from '@/models/calculator';
import { reactive, ref } from 'vue';
import CalculatorDisplay from './CalculatorDisplay.vue';
import CalculatorKeyboard from './CalculatorKeyboard.vue';
import { useCalculatorStore } from '@/stores/calculator';


const calculatorStore = useCalculatorStore()

let calculator = reactive(calculatorStore.getCalculator())

let display = ref(calculator.displayString)

const handleClick = (input: number | string) => {
  calculatorStore.updateCalculator(input)
  display.value = calculator.displayString
}
</script>

<template>
    <main>
      <div class="container">
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
