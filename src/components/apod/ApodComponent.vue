<template>
    <main>
        <div
            class="container"
        >
            <div class="row align-items-md-stretch">
                <div class="col-md-12">
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

            </div>
            
        </div>
    </main>
</template>

<script setup lang="ts">
// get info from apod api
import { ref, type Ref } from 'vue';
// import { Apod } from '@/models/apod';

let apod: any = ref(null);

const getApod = async () => {

    let url = '';
    const baseUrl = 'https://api.nasa.gov/planetary/apod';
    const apiKey  = 'DEMO_KEY';
    url = `${baseUrl}?api_key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    apod.value = data;
}

getApod();
</script>

<style scoped>

</style>