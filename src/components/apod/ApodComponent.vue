<template>
    <main>
        <div
            class="container"
        >
            <div class="row align-items-md-stretch">
                <div class="col-md-12" v-if="apod">
                    <ApodPicker @update:currentDate="currentDate = $event" />
                    <ApodInfo :apodInfo="apod" />
                </div>
                <div
                    class="alert alert-primary"
                    role="alert"
                    v-else
                >
                    <strong>Loading from APOD</strong> 
                </div>
                

            </div>
            
        </div>
    </main>
</template>

<script setup lang="ts">
// get info from apod api
import { Apod } from '@/models/apod';
import { ref, watch, type Ref } from 'vue';
import ApodInfo from './ApodInfo.vue';
import ApodPicker from './ApodPicker.vue';
// import { Apod } from '@/models/apod';

let apod: Ref<Apod | null> = ref(null);

const currentDate = ref("");

watch(currentDate, (newVal, oldVal) => {
    console.log(newVal);
    getApod(newVal);
});

const getApod = async (dateStr?: string) => {

    let url = '';
    const baseUrl = 'https://api.nasa.gov/planetary/apod';
    const apiKey  = 'DEMO_KEY';
    if (dateStr !== undefined && dateStr !== null && dateStr !== '') {
        url = `${baseUrl}?api_key=${apiKey}&date=${dateStr}`;
    } else {
    url = `${baseUrl}?api_key=${apiKey}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    apod.value = new Apod(data);
}



getApod();
</script>

<style scoped>

</style>