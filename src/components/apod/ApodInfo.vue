<template>
    <div
        class="h-100 p-5 text-black bg-light border rounded-3"
    >
        <h2>{{apodInfo.title}}</h2>
        <h5>{{ apodInfo.date }}</h5>
        <img
            v-if="apodInfo.isImage"
            :src="apodInfo.url"
            :alt="apodInfo.title"
            class="img-fluid"
        />
        <iframe
            v-else-if="apodInfo.isVideo"
            :src="apodInfo.url"
            width="560"
            height="315"
            frameborder="0"
            allowfullscreen
        ></iframe>
        <p>
            {{apodInfo.explanation}}
        </p>
        <button
            class="btn btn-outline-primary"
            type="button"
            :href="apodInfo.hdUrl"
        >
            HD Image
        </button>
    </div>
</template>

<script setup lang="ts">

import type { Apod } from '@/models/apod';

const props = defineProps<{
    apodInfo: Apod;
}>();

</script>

<style scoped>

</style>