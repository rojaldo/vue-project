<script setup lang="ts">
import { Hero } from '@/models/hero';
import { computed, reactive, ref, type Reactive } from 'vue';
import HeroesList from './HeroesList.vue';
import HeroForm from './HeroForm.vue';

let heroes = reactive([new Hero('Superman', 'Flying'), new Hero('Batman', 'Rich')]);

// let heroInfo = computed(() => {
//     return `${heroName.value}: ${heroPower.value}`;
// });

const addHero = (hero: Hero) => {
    heroes.push(hero);
}

const remove = (index: number) => {
    heroes.splice(index, 1);
}   

</script>

<template>
    <main>
        <HeroForm @addHero="addHero" />
        <!-- <p>{{ heroInfo }}</p> -->
        <HeroesList :heroesList="heroes" @removeHero="remove"/>
    </main>
</template>

<style scoped>

</style>