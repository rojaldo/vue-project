<script setup lang="ts">
import { Hero } from '@/models/hero';
import { computed, reactive, ref } from 'vue';


let heroes = reactive([new Hero('Superman', 'Flying'), new Hero('Batman', 'Rich')]);
let heroName = ref('');

let heroPower = ref('');

let heroInfo = computed(() => {
    return `${heroName.value}: ${heroPower.value}`;
});

const addHero = () => {
    if (heroName.value === '') {
        return;
    }
    heroes.push(new Hero(heroName.value, heroPower.value));
    heroName.value = '';
    heroPower.value = '';
}

</script>

<template>
    <main>
        <h1>Heroes</h1>
        <p>Hero Name</p>
        <input type="text" v-model="heroName">
        <p>Hero Power</p>
        <input type="text" v-model="heroPower">
        <!-- <button @click="addHero" v-if="heroName !== ''" >Add Hero</button>
        <button @click="addHero" v-else disabled>Add Hero</button> -->
        <button @click="addHero" :disabled="heroName === ''">Add Hero</button>
        
        <p>{{ heroInfo }}</p>
        <ul>
            <li v-for="(hero, index) in heroes" :key="index">
                <strong>{{ hero.name }}: </strong> {{ hero.power }}</li>
        </ul>
    </main>
</template>

<style scoped>

</style>