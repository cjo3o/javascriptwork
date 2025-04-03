class Person {
    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    sayHi() {
        console.log(`this.name ${this.name} this.#age ${this.#age}`);
    }
}

const me = new Person('lee', 30);
me.sayHi();

console.log(me.name);

console.log(me.#age);