import { Calculator } from "@/models/calculator"
import { Hero } from "@/models/hero"
import { defineStore } from "pinia"
import { reactive, ref, type Reactive } from "vue"

export const useCalculatorStore = defineStore('calculator', () => {

    const calculator: Calculator = new Calculator()

    function updateCalculator(val: any) {
        (typeof val === 'string') ? calculator.handleSymbol(val) : calculator.handleNumber(val)
    }

    function getCalculator() {
        return calculator
    }

    return { updateCalculator, getCalculator }


})