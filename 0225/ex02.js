const person = {};

Object.defineProperties(person, {
    firstName: {
        value: 'Alice',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Bob',
        writable: false,
        enumerable: false,
        configurable: false
    },
    fullName: {
        get(){
            return `${this.firstName} ${this.lastName}`;
        },
        set(fn){
            [this.firstName, this.lastName] = fn.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = '홍 길동';
console.log(person.fullName);

// delete person.firstName;
// delete person.lastName;
//
// person.firstName = '길동';
// person.lastName = '홍';
//
// console.log(person.firstName);
// console.log(person.lastName);
//
// for(const key in person) {
//     console.log(key);
// }