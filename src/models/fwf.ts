import type { Country } from "./country";

export class Fwf {

    private _countries: String[] = []

    constructor(private _country: Country, private _wrongCountries: String[]) {
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
}