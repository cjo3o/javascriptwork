function person(name, age) {
    this.name = name;
    let _age = age;

    this.sayHi = function (){
        console.log(` this.name = ${this.name} _age ${_age}`);
    }
}

const me = new person('lee', 20);
me.sayHi();

const you = new person('kim', 23);
you.sayHi();

console.log(`me.name = ${me.name}`);
console.log(`me._age = ${me._age}`);