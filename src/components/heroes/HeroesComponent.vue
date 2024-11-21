<script setup lang="ts">
import { Hero } from '@/models/hero';
import { computed, onBeforeUnmount, reactive, ref, type Reactive } from 'vue';
import HeroesList from './HeroesList.vue';
import HeroForm from './HeroForm.vue';
import { useHeroesStore } from '@/stores/heroes';

// let heroes = reactive([new Hero('Superman', 'Flying'), new Hero('Batman', 'Rich')]);

const heroesStore = useHeroesStore();

let heroes: Reactive<Hero[]> = reactive(heroesStore.heroes);

// let heroInfo = computed(() => {
//     return `${heroName.value}: ${heroPower.value}`;
// });

onBeforeUnmount(() => {
    console.log('El componente está a punto de desmontarse');
  });

const addHero = (hero: Hero) => {
    // heroesStore.addHero(hero);
    heroes.push(hero);
}

const remove = (index: number) => {
    heroes.splice(index, 1);
}   

</script>

<template>
    <main>
        <div class="container">
            <HeroForm @addHero="addHero" />
            <!-- <p>{{ heroInfo }}</p> -->
            <HeroesList :heroesList="heroes" @removeHero="remove"/>
        </div>
</main>
</template>

<style scoped>

</style>