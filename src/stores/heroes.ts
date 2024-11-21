import { Hero } from "@/models/hero"
import { defineStore } from "pinia"
import { reactive, ref, type Reactive } from "vue"

export const useHeroesStore = defineStore('heroes', () => {

    const heroes: Hero[] = []
    const tmpHero: Hero = new Hero('', '')


    return { heroes, tmpHero }


})