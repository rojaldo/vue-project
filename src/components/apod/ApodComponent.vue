<template>
    <main>
        <div
            class="container"
        >
            <div class="row align-items-md-stretch">
                <div class="col-md-12" v-if="apod">
                    <VanDatePicker

                        placeholder="Select Date"
                        v-model="currentDate"
                    />
                    <div
                        class="h-100 p-5 text-black bg-light border rounded-3"
                    >
                        <h2>{{apod.title}}</h2>
                        <h5>{{ apod.date }}</h5>
                        <img
                            v-if="apod.isImage"
                            :src="apod.url"
                            :alt="apod.title"
                            class="img-fluid"
                        />
                        <iframe
                            v-else-if="apod.isVideo"
                            :src="apod.url"
                            width="560"
                            height="315"
                            frameborder="0"
                            allowfullscreen
                        ></iframe>
                        <p>
                            {{apod.explanation}}
                        </p>
                        <button
                            class="btn btn-outline-primary"
                            type="button"
                            :href="apod.hdUrl"
                        >
                            HD Image
                        </button>
                    </div>
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
// import { Apod } from '@/models/apod';

let apod: Ref<Apod | null> = ref(null);

// define an array of date strings of today date
const today = new Date();
const dateArray = [today.getFullYear().toString(), (today.getMonth() + 1).toString(), (today.getDate()).toString()];

const currentDate = ref(dateArray);

watch(currentDate, (newVal, oldVal) => {
    if (newVal === undefined || newVal === null || newVal.length !== 3) return;
    const dateString = `${newVal[0]}-${newVal[1]}-${newVal[2]}`;
    getApod(dateString);
});

const getApod = async (dateStr?: string) => {

    let url = '';
    const baseUrl = 'https://api.nasa.gov/planetary/apod';
    const apiKey  = 'DEMO_KEY';
    if (dateStr) {
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