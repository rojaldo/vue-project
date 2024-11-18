<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{card.question}}</h4>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" v-for="(answer,index) in card.answers" :key="index">{{answer}}</button>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">

import { Card } from '@/models/card';
import type { PropType } from 'vue';

const props = defineProps({
    card: {
        type: Object as PropType<Card>,
        required: true
    }
});

</script>

<style scoped>

</style>