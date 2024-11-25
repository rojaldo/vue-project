<template>
    <div>
        <h1>Countries</h1>
        <div
            class="row justify-content-center align-items-center g-2"
        >
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(fwf, index) in fwfCards">
                <FwfCard  :key="index" :fwf="fwf"/>

            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { useCountriesStore } from '@/stores/countries';
import { reactive, type Reactive } from 'vue';
import { Country } from '@/models/country';
import { Fwf } from '@/models/fwf';
import FwfCard from '@/components/countries/FwfCard.vue';

const store = useCountriesStore();

const countries: Reactive<Country[]> = reactive(store.countries);

const fwfCards: Fwf[] = reactive([]);

const getCountries = async () => {
    const baseUrl = 'https://restcountries.com/v3.1/all';
    const response = await fetch(baseUrl);
    const data: any[] = await response.json();
    const myData: Country[] = data.map((country: any) => {
        return new Country(country);
    });
    countries.push(...myData);
    let fwf = countries.map((country) => {
        // get an array of 3 random countries names
        let randomCountries = countries.sort(() => Math.random() - 0.5).slice(0, 3);

        return new Fwf( country as Country, randomCountries.map((country) => country.name));
    });
    fwfCards.push(...fwf);

        // check if date from api is different from the apod.date
}

getCountries();

</script>

<style scoped>

</style>