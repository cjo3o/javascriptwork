var person = {
    name: "John",
    sayHello: function() {
        console.log(`ni my name is ${this.name}`);
    },
    'a-a':10
};

console.log(person.a-a);
console.log(person["a-a"]);

person.sayHello();

var empty = {};
console.log(typeof empty);
console.log(empty);