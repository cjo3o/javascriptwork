const Person = {
    construct(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    },
    get fullName() {
        return `fname ${this.fName} lname ${this.lName}`;
    },
    set fullName(name) {
        [this.fName, this.lName] = name.split(' ');
    }
}
const person = new Person('홍', '길동');

console.log(person);
console.log(person.fullName);

person.fullName = '박 길동';
console.log(person.fullName);