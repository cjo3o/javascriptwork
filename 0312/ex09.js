const person = {
    name: 'John',
    getName() {
        return this.name;
    }
}

// console.log(person.getName());

const a1Person = {
    name: 'Kim'
}

a1Person.getName = person.getName;

a1Person.getName();