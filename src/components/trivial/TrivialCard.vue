<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{card.question}}</h4>
            <div class="d-grid gap-2">
                <button :class="buttonClasses[index]" type="button" v-for="(answer,index) in card.answers" :key="index" @click="handleAnswer(answer, index)" :disabled="card.answered">{{answer}}</button>
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

const emits = defineEmits(['rightAnswer']);

let buttonClasses: string[] = [];
props.card.isMultipleChoice ? buttonClasses = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary'] : buttonClasses = ['btn btn-primary', 'btn btn-primary'];

const handleAnswer = (answer: string, index: number) => {
    console.log(answer);
    props.card.answered = true;
    props.card.checkRightAnswer(answer);

    buttonClasses.forEach((buttonClass, i) => {
        buttonClasses[i] = getButtonClass(props.card.answers[i], i);
    });
    emits('rightAnswer', props.card.correctAnswered ? true : false);
}

const getButtonClass = (answer: string, index: number) => {
    console.log("getButtonClass()");
    
    if(!props.card.answered){
        return 'btn btn-primary';
    } else {
        if (props.card.correctAnswer === answer) {
            return 'btn btn-success';
        } 
        if (!props.card.correctAnswered && props.card.userAnswer === answer) {
            return 'btn btn-danger';
        }
        return 'btn btn-secondary';
    }

}

</script>

<style scoped>

</style>