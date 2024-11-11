<template>
        <h1>Heroes</h1>
        <p>Hero Name</p>
        <input type="text" v-model="heroName">
        <p>Hero Power</p>
        <input type="text" v-model="heroPower">
        <!-- <button @click="addHero" v-if="heroName !== ''" >Add Hero</button>
        <button @click="addHero" v-else disabled>Add Hero</button> -->
        <button @click="onClick" :disabled="heroName === ''">Add Hero</button>
</template>

<script setup lang="ts">
import { Hero } from '@/models/hero';
import { ref } from 'vue';

let heroName = ref('');
let heroPower = ref('');

const emits = defineEmits(['addHero']);

const onClick = () => {
    if (heroName.value === '') {
        return;
    }

    emits('addHero', new Hero(heroName.value, heroPower.value));
    
    heroName.value = '';
    heroPower.value = '';
}

</script>

<style scoped>

</style>