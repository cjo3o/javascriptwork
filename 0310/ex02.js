function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`hello 나는 ${this.name} 나이는 ${this.age}`);
};

Person.prototype = {
    greet() {
        console.log(`hello 나는 ${this.name} 나이는 ${this.age}`);
    }
}

const p1 = new Person("John", 20);
const p2 = new Person("Alice", 10);

// p1.greet();
// p2.greet();

console.log(p1.constructor);
console.log(p2.constructor);