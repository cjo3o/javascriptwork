function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function() {
        console.log(`name = ${name} age =  ${age}`);
    };
}

const p1 = new Person("John",20);
const p2 = new Person("adsf",30);
const p3 = new Person("qwer",40);
