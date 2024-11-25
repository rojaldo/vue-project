<template>
    <div class="card">
        <img class="card-img-top mx-auto" :src="fwf.country.flag" alt="Title" style="width: 300px;"/>
        <div class="card-body">
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" v-for="(answer,index) in fwf.countries" :key="index" @click="handleAnswer(answer, index)" :disabled="false">{{answer}}</button>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">

defineProps(['fwf']) 

const handleAnswer = (answer: string, index: number) => {
    console.log(answer);
 
}

</script>

<style scoped>

</style>