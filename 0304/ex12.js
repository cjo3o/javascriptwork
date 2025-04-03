function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("January", 11);
const person2 = new Person("January", 15);
const person3 = new Person("January", 20);

console.log(person1 instanceof Person);

// Person의 프로토타입에 의사 메서드 추가
// Object.defineProperty(Person.prototype, "greet", {
//     get() {
//         return () => `Hello, my name is ${this.name}`;
//     }
// });
//
// const p = new Person("Emma");
// console.log(p.greet()); // "Hello, my name is Emma"
//
// const person1 = new Person('홍길동', 20);
// console.log(person1);
//
// const person2 = new Person('박길동', 20);
// console.log(person2);

function  test() {}
