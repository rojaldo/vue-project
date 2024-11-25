export class Country {

    private _name = ''
    private _capital = ''
    private _region = ''
    private _subregion = ''
    private _population = -1
    private _area = -1
    private _flag = ''

    constructor(json: any) {
        if (json) {
            this._name = json.name.common
            json.capital === undefined ? this._capital = '' : this._capital = json.capital[0]
            this._region = json.region
            this._subregion = json.subregion
            this._population = json.population
            this._area = json.area
            this._flag = json.flags.png
        }
    }

    get name() {
        return this._name
    }

    get capital() {
        return this._capital
    }

    get region() {
        return this._region
    }

    get subregion() {
        return this._subregion
    }

    get population() {
        return this._population
    }

    get area() {
        return this._area
    }

    get flag() {
        return this._flag
    }

}