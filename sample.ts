
abstract class Shape {

    protected _color = '';


    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

}

class Circle extends Shape {

    private _area = 0;
    private _radius = 0;

    constructor(radius: number, color: string) {
        super();
        this._color = color;
        this.radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
        this._area = Math.PI * Math.pow(this._radius, 2);
    }

    get area(): number {
        return this._area;
    }

    
}

let circle = new Circle(10, 'red');
console.log(circle.area); // 314.1592653589793
circle.radius = 20;
console.log(circle.area); // 1256.6370614359173

let shape = new Shape(); // Error: Cannot create an instance of an abstract class.