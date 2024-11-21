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
        <div
            class="alert alert-danger"
            role="alert"
            v-show="invalidHeroName && heroName.length > 0"
        >
            <strong>wrong name</strong> please introduce a valid name for the hero, at least 3 characters
        </div>
        
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
        <button class="btn btn-primary mb-4" @click="onClick" :disabled="invalidHeroName">Add Hero</button>
</template>

<script setup lang="ts">
import { Hero } from '@/models/hero';
import { useHeroesStore } from '@/stores/heroes';
import { computed, onBeforeUnmount, ref, type Reactive } from 'vue';

const heroStore = useHeroesStore();

let myHero = heroStore.tmpHero;

let heroName = ref(myHero?.name);
let heroPower = ref(myHero?.power);

const emits = defineEmits(['addHero']);

const invalidHeroName = computed(() => {
    //define a regex to check if the hero name is between 3 and 20 characters and only letters and spaces include spanish characters
    return !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,20}$/.test(heroName.value);
});

const onClick = () => {
    if (heroName.value === '') {
        return;
    }

    emits('addHero', new Hero(heroName.value, heroPower.value));
    
    heroName.value = '';
    heroPower.value = '';
}

onBeforeUnmount(() => {
    myHero.name = heroName.value;
    myHero.power = heroPower.value;
  });

</script>

<style scoped>

</style>