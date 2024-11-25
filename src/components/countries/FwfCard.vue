<template>
    <div class="card">
        <img class="card-img-top mx-auto" :src="fwf.country.flag" alt="Title" style="width: 300px;"/>
        <div class="card-body">
            <div class="d-grid gap-2">
                <button :class="myClasses[index]" type="button" v-for="(answer,index) in fwf.countries" :key="index" @click="handleAnswer(answer, index)" :disabled="fwf.answered">{{answer}}</button>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import type { Fwf } from '@/models/fwf';
import { computed } from 'vue';


const props = defineProps<{
    fwf: Fwf;
}>()

let buttonClasses: string[] = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary']

const myClasses = computed(() => {buttonClasses.forEach((buttonClass, index) => {
        buttonClasses[index] = getButtonClass(props.fwf.countries[index], index);
        
    });
    return buttonClasses;
});

const handleAnswer = (answer: string, index: number) => {
    console.log(answer);
    props.fwf.setAnswered();
    props.fwf.userAnswer = answer;
 
}


const getButtonClass = (answer: string, index: number) => {
    console.log("getButtonClass()");
    
    if(!props.fwf.answered){
        return 'btn btn-primary';
    } else {
        if (props.fwf.country.name === answer) {
            return 'btn btn-success';
        } 
        if (!props.fwf.correctAnswered && props.fwf.userAnswer === answer) {
            return 'btn btn-danger';
        }
        return 'btn btn-secondary';
    }

}

</script>

<style scoped>

</style>