import type { Country } from "./country";

export class Fwf {

    private _countries: string[] = []
    private _answered = false
    private _userAnswer = ''
    private _correctAnswered = false

    constructor(private _country: Country, private _wrongCountries: string[]) {
        this._countries.push(_country.name)
        this._wrongCountries.forEach((country) => {
            this._countries.push(country)
        })
    }

    get country() {
        return this._country
    }

    get countries() {
        return this._countries
    }

    get answered() {
        return this._answered
    }

    setAnswered() {
        this._answered = true
    }

    get userAnswer() {
        return this._userAnswer
    }

    set userAnswer(answer: string) {
        this._userAnswer = answer
        this._correctAnswered = this._userAnswer === this._country.name
    }

    get correctAnswered() {
        return this._correctAnswered
    }
}