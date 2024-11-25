<template>
    <VanDatePicker
        placeholder="Select Date"
        v-model="currentDate"
    />
</template>

<script setup lang="ts">
import { useApodStore } from '@/stores/apod';
import { ref, watch } from 'vue';

const emits = defineEmits(['update:currentDate']);

const apodStore = useApodStore();

const storeDate = ref(apodStore.getDate());

// split storeDate in format yyyy-mm-dd to array of strings [year, month, day], use split method
const dateArray = [storeDate.value.split('-')[0], storeDate.value.split('-')[1], storeDate.value.split('-')[2]];

const currentDate = ref(dateArray);

watch(currentDate, (newVal, oldVal) => {
    if (newVal === undefined || newVal === null || newVal.length !== 3) return;
    const dateString = `${newVal[0]}-${newVal[1]}-${newVal[2]}`;
    emits('update:currentDate', dateString);
    
});
</script>

<style scoped>

</style>