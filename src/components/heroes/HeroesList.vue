<template>

    <ul class="list-group list-group">

            <li class="list-group-item" v-for="(hero, index) in heroesList" :key="index">
                <strong>{{ hero.name }}: </strong> {{ hero.power }} <button class="btn btn-danger" @click="removeHero(index)" >Remove</button></li>
    </ul>
</template>

<script setup lang="ts">

// define props heroesList
import type { Hero } from '@/models/hero';
import { useHeroesStore } from '@/stores/heroes';
import type { Reactive } from 'vue';

const props = defineProps<{
    heroesList: Reactive<Hero[]>
}>()


const emits = defineEmits(['removeHero']);

const removeHero = (index: number) => {
    // props.heroesList.splice(index, 1);
    emits('removeHero', index);
}


</script>


<style scoped>

</style>