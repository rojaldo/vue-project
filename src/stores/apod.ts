
import { defineStore } from "pinia"
import { ref } from "vue"

export const useApodStore = defineStore('apod', () => {

    const date = ref('')

    let setDate = (newDate: string) => {
        date.value = newDate
    }

    let getDate = () => {
        return date.value
    }


    return { date, setDate, getDate }


})