<template>
    <main>
        <div
            class="container"
        >
            <div class="row align-items-md-stretch">
                <div class="col-md-12" v-if="apod">
                    <VanDatePicker

                        placeholder="Select Date"
                        @change="printData"
                        v-model="currentDate"
                    />
                    <div
                        class="h-100 p-5 text-black bg-light border rounded-3"
                    >
                        <h2>{{apod.title}}</h2>
                        <h5>{{ apod.date }}</h5>
                        <img
                            :src="apod.url"
                            :alt="apod.title"
                            class="img-fluid"
                        />
                        <p>
                            {{apod.explanation}}
                        </p>
                        <button
                            class="btn btn-outline-primary"
                            type="button"
                            :href="apod.hdurl"
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
import { ref, type Ref } from 'vue';
// import { Apod } from '@/models/apod';

let apod: any = ref(null);
const currentDate = ref(['2024', '11', '11']);

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
    apod.value = data;
}

const printData = (date: any) => {
    console.log(date);
    console.log(JSON.stringify(date));
    let tmp = date;
    let dateStr = `${tmp.selectedValues[0]}-${tmp.selectedValues[1]}-${tmp.selectedValues[2]}`;
    getApod(dateStr);
}

getApod();
</script>

<style scoped>

</style>