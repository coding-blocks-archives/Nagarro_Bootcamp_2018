
function Person (name, age) {
    let country = 'India'
    this.name = name
    this.migrateTo = function (newCountry) {
        country = newCountry
    }
    this.isAdult = function () {
        return age > 18
    }
    this.isForeigner = function () {
        return country != 'India'
    }
}


let x = Person('John', 30)
let p = new Person('Harry', 20)
let k = new Person('Kate', 15)