function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.print = function() {
    console.log(`${name} ${age}`);
}

const p1 = new Person("John",20);
const p2 = new Person("adsf",30);
const p3 = new Person("qwer",40);

console.log(p1.print === p2.print);
console.log(p2.print === p3.print);