<template>

    
        <h1>Heroes</h1>
        <div class="mb-3">
        <label for="" class="form-label">Hero Name</label>
        <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
            v-model="heroName"
        />
        <small id="helpId" class="form-text text-muted">Introduce the name of the hero</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Hero Power</label>
            <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
                v-model="heroPower"
            />
            <small id="helpId" class="form-text text-muted">Introduce the power of the hero</small>
        </div>
        
        <!-- <button @click="addHero" v-if="heroName !== ''" >Add Hero</button>
        <button @click="addHero" v-else disabled>Add Hero</button> -->
        <button class="btn btn-primary mb-4" @click="onClick" :disabled="heroName === ''">Add Hero</button>
</template>

<script setup lang="ts">
import { Hero } from '@/models/hero';
import { ref } from 'vue';

let heroName = ref('');
let heroPower = ref('');

const emits = defineEmits(['addHero']);

const onClick = () => {
    if (heroName.value === '') {
        return;
    }

    emits('addHero', new Hero(heroName.value, heroPower.value));
    
    heroName.value = '';
    heroPower.value = '';
}

</script>

<style scoped>

</style>