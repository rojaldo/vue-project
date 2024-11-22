<template>
    <p>{{ props.apodDate }}</p>
    <div
        class="h-100 p-5 text-black bg-light border rounded-3"
    >
        <h2>{{apod?.title}}</h2>
        <h5>{{ apod?.date }}</h5>
        <img
            v-if="apod?.isImage"
            :src="apod?.url"
            :alt="apod?.title"
            class="img-fluid"
        />
        <iframe
            v-else-if="apod?.isVideo"
            :src="apod?.url"
            width="560"
            height="315"
            frameborder="0"
            allowfullscreen
        ></iframe>
        <p>
            {{apod?.explanation}}
        </p>
        <button
            class="btn btn-outline-primary"
            type="button"
            :href="apod?.hdUrl"
        >
            HD Image
        </button>
    </div>
</template>

<script setup lang="ts">

import { Apod } from '@/models/apod';
import { get } from 'vant/lib/utils';
import { onBeforeUpdate, ref, watch, type Ref } from 'vue';

const props = defineProps<{
    apodInfo?: Apod;
    apodDate?: string;
}>();

onBeforeUpdate(() => {
    //check with regex if the date is in the correct format
    if (props.apodDate !== undefined && props.apodDate !== null && props.apodDate !== '') {
        console.log('apodDate', props.apodDate);
        getApod(props.apodDate);
    }
});

const apod: Ref<Apod | null> = ref(null);

const getApod = async (dateStr?: string) => {
    if (apod.value?.date === dateStr && dateStr !== undefined) return;
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
    // check if date from api is different from the apod.date
    console.log('data', data);
    apod.value = new Apod(data);
}

getApod();


</script>

<style scoped>

</style>