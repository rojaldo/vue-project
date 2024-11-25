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
import { useApodStore } from '@/stores/apod';
import { computed, onBeforeUpdate, reactive, ref, watch, type Ref } from 'vue';

const props = defineProps<{
    apodInfo?: Apod;
    apodDate?: string;
}>();

const apodStore = useApodStore();

let apod: any = reactive<Apod>( new Apod());

let apodInfo = new Apod();

watch (apodStore.apod, (newVal, oldVal) => {
    console.log('watch apodDate', newVal);
    apod = newVal;
});

onBeforeUpdate(async () => {
    //check with regex if the date is in the correct format
    if (props.apodDate !== undefined && props.apodDate !== null && props.apodDate !== '') {
        console.log('apodDate', props.apodDate);
        let res = await apodStore.getApod();
        if (res !== undefined) {
            apodInfo.setInfo(await apodStore.getApod())
        }
    }
});


apod.setInfo(await apodStore.getApod())



</script>

<style scoped>

</style>