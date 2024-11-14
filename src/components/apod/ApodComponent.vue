<template>
    <main>
        <div
            class="container"
        >
            <div class="row align-items-md-stretch">
                <div class="col-md-12">
                    <ApodPicker @update:currentDate="currentDate = $event" />
                    <ApodInfo :apodDate="currentDate" />
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


</script>

<style scoped>

</style>