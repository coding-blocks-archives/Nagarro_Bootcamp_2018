export class Person {
    private name: string
    private age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    isAdult () {
        return this.age > 18
    }

}

export class Vehicle {

}