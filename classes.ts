class Animal {
    name: string // public by default
    private weight: number;
    protected age: number;

    constructor(name: string, weight?: number, age: number = 0) {
        this.name = name;
        this.weight = weight;
        this.age = age;
    }

    getWeight(): number {
        return this.weight;
    }
}

let cat = new Animal('Filou', 150);
console.log(cat.age) // error, age only accessible within Animal and subclasses

