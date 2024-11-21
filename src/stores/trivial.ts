import { Calculator } from "@/models/calculator"
import type { Card } from "@/models/card"
import { Hero } from "@/models/hero"
import { defineStore } from "pinia"
import { reactive, ref, type Reactive } from "vue"

export const useTrivialStore = defineStore('trivial', () => {

    const trivialCards: Array<Card> = []
    const score = 0


    return { trivialCards, score }


})