class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get isAdult() {
        return this.age > 18
    }
}

let p = new Person('Harry', 20)
let k = new Person('Kate', 15)