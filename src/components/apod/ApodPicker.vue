<template>
    <VanDatePicker
        placeholder="Select Date"
        v-model="currentDate"
    />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emits = defineEmits(['update:currentDate']);

const today = new Date();
const dateArray = [today.getFullYear().toString(), (today.getMonth() + 1).toString(), (today.getDate()).toString()];

const currentDate = ref(dateArray);

watch(currentDate, (newVal, oldVal) => {
    if (newVal === undefined || newVal === null || newVal.length !== 3) return;
    const dateString = `${newVal[0]}-${newVal[1]}-${newVal[2]}`;
    emits('update:currentDate', dateString);
    
});
</script>

<style scoped>

</style>