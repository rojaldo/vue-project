
import { Apod } from "@/models/apod"
import { defineStore } from "pinia"
import { reactive, ref } from "vue"

export const useApodStore = defineStore('apod', () => {

    // initialize the date with today's date
    const date = ref(new Date().toISOString().substr(0, 10))
    let apod = ref(new Apod())

    let setDate = (newDate: string) => {
        date.value = newDate
    }

    let getDate = () => {
        return date.value
    }

    let getApod = () => {
        if (date.value === apod.value.date) {
            return apod.value
        } else {
            return getApodfromApi(date.value)
        }
    }

    const getApodfromApi = async (dateStr?: string) => {
        
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



    return { date, setDate, getDate, getApod, apod }


})