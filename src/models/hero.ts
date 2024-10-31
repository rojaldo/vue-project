export class Hero {
    
    constructor(private _name: string, private _power: string) {}

    get name() {
        return this._name
    }

    get power() {
        return this._power
    }
}