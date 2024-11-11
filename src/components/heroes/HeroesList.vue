<template>
        <ul>
            <li v-for="(hero, index) in heroesList" :key="index">
                <strong>{{ hero.name }}: </strong> {{ hero.power }}</li>
        </ul>
</template>

<script setup lang="ts">

// define props heroesList
import { Hero } from '@/models/hero';
import type { Reactive } from 'vue';

const props = defineProps<{
    heroesList: Reactive<Hero[]>
}>()


</script>


<style scoped>

</style>