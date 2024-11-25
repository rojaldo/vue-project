import type { Country } from "@/models/country"
import { defineStore } from "pinia"
import { reactive, ref, type Reactive } from "vue"

export const useCountriesStore = defineStore('countries', () => {

    const countries: Country[] = []
    


    return { countries }


})