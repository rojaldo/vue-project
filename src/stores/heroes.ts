import type { Hero } from "@/models/hero"
import { defineStore } from "pinia"
import { reactive, type Reactive } from "vue"

export const useHeroesStore = defineStore('heroes', () => {

    const heroes: Reactive<Hero[]> = reactive([])

    let addHero = (hero: Hero) => {
        heroes.push(hero)
    }

    let removeHero = (index: number) => {
        heroes.splice(index, 1)
    }

    return { heroes, addHero, removeHero }


})