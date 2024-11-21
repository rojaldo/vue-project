<template>
<div
    class="container"
>
<h1>Trivial Game</h1>
<h2>Score: {{score}}</h2>
<div class="row justify-content-center align-items-center g-2">
    <div class="col-xs-12 col-md-6 col-lg-4" v-for="(card,index) in trivialCards" :key="index">
        <TrivialCard :card="card" @rightAnswer="handleScore"/>

    </div>
</div>

</div>


</template>

<script setup lang="ts">
import { Card } from '@/models/card';
import { reactive, ref, type Reactive } from 'vue';
import TrivialCard from './TrivialCard.vue';
import { useTrivialStore } from '@/stores/trivial';

const trivialStore = useTrivialStore();


const trivialCards = reactive (trivialStore.trivialCards);
const score = ref(trivialStore.score);
    

const getCards = async () => {
    // if cards is empty, fetch cards
    if(trivialCards.length > 0) return;
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const data = await response.json();
    let cards: Array<Card> = [];
        cards = data.results.map((card: any) => {
            return new Card(card);
        });
    trivialCards.push(...cards);
}

const handleScore = (value: boolean) => {
    console.log(value);
    value ? trivialStore.score += 2 : trivialStore.score -= 1;
    value ? score.value += 2 : score.value -= 1;
}

getCards();

</script>

<style scoped>

</style>