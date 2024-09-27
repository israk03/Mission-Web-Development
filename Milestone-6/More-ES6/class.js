class Person {
    // constructor method to initialize object properties
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // method to describe the person
    describe() {
        return `${this.name} is ${this.age} years old.`
    }
}