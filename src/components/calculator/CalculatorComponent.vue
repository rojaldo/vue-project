<script setup lang="ts">
import { Calculator } from '@/models/calculator';
import { ref } from 'vue';

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
        <div class="calc-text">
      <p name="user-input" id="user-input">{{ display }}</p>
    </div>
    <div class="calc-keys">

      <button type="button" @click="handleClick(7)" class="numbers">7</button>
      <button type="button" @click="handleClick(8)" class="numbers">8</button>
      <button type="button" @click="handleClick(9)" class="numbers">9</button>
      <button type="button" @click="handleClick('/')" class="key-operate operations">/</button>
      <button type="button" @click="handleClick(4)" class="numbers">4</button>
      <button type="button" @click="handleClick(5)" class="numbers">5</button>
      <button type="button" @click="handleClick(6)" class="numbers">6</button>
      <button type="button" @click="handleClick('*')" class="key-operate operations">*</button>
      <button type="button" @click="handleClick(1)" class="numbers">1</button>
      <button type="button" @click="handleClick(2)" class="numbers">2</button>
      <button type="button" @click="handleClick(3)" class="numbers">3</button>
      <button type="button" @click="handleClick('-')" class="key-operate operations">-</button>
      <button type="button" @click="handleClick('AC')" class="key-others operations">AC</button>
      <button type="button" @click="handleClick(0)" class="numbers">0</button>
      <button type="button" @click="handleClick('=')" class="key-others operations">=</button>
      <button type="button" @click="handleClick('+')" class="key-operate operations">+</button>
    </div>
    </main>
</template>

<style>
button {
  background: #333333;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  border-radius: 70%;
  cursor: pointer;
  height: 65px;
  width: 65px;
}

button:active,
button:focus {
  filter: brightness(120%);
}

.calc-keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 10px;
}

.key-zero {
  grid-column: span 2;
  width: 100%;
  border-radius: 30px;
}

.key-operate {
  background: #ff9501;
}

.key-others {
  background: #a6a6a6;
  color: #000000;
}

.calc-text {
  margin-bottom: 20px;
  padding-left: 5px;
}

.calc-text p {
  width: 100%;
  font-size: 3.5rem;
  text-align: end;
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
