<template>
<div
    class="container"
>
<div class="row justify-content-center align-items-center g-2">
    <div class="col-xs-12 col-md-6 col-lg-4" v-for="(card,index) in trivialCards" :key="index">
        <TrivialCard :card="card" />

    </div>
</div>

</div>



</template>

<script setup lang="ts">
import { Card } from '@/models/card';
import { reactive, type Reactive } from 'vue';
import TrivialCard from './TrivialCard.vue';


const trivialCards: Reactive<Array<Card>> = reactive ([]);
    

const getCards = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const data = await response.json();
    let cards: Array<Card> = [];
        cards = data.results.map((card: any) => {
            return new Card(card);
        });
    trivialCards.push(...cards);
}

getCards();

</script>

<style scoped>

</style>