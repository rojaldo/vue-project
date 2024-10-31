<script setup lang="ts">
import { reactive, ref } from 'vue';


let heroes = reactive(['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Green Lantern']);

let heroName = ref('');

const addHero = () => {
    if (heroName.value === '') {
        return;
    }
    heroes.push(heroName.value);
    heroName.value = '';
}
</script>

<template>
    <main>
        <h1>Heroes</h1>
        <input type="text" v-model="heroName">
        <!-- <button @click="addHero" v-if="heroName !== ''" >Add Hero</button>
        <button @click="addHero" v-else disabled>Add Hero</button> -->
        <button @click="addHero" :disabled="heroName === ''">Add Hero</button>
        
        <p>{{ heroName }}</p>
        <ul>
            <li v-for="(hero, index) in heroes" :key="index">{{ hero }}</li>
        </ul>
    </main>
</template>

<style scoped>

</style>