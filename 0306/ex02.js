function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
        console.log(`name = ${name} age=${age}`);
    }
}


console.log(Person.prototype);
Person.prototype.print = function () {
    console.log(`name = ${this.name} age=${this.age}`);
}
console.log(Person.prototype);

// const p1 = new Person('John',20);
// p1.print();
// const p2 = new Person('Joe',12);
// p2.print();
// const p3 = new Person('Jessi',32);
// p3.print();