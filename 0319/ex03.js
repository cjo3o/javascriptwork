const person = {
    fName: "John",
    lName: "huko",
    get fullName() {
        return `fname ${this.fName} lname ${this.lName}`;
    },
    set fullName(name) {
        [this.fName, this.lName] = name.split(' ');
    }
}

console.log(person);
console.log(person.fullName);

person.fullName = '박 길동';
console.log(person.fullName);