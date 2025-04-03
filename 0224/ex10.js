const person = {

};

person.fName = "박";

Object.defineProperty(person, "1Name", {
    value: "길동",
    writable:true,
    configurable:true,
})

Object.defineProperty(person, "age", {
    value: 20
})

const 프로퍼티s = Object.getOwnPropertyDescriptors(person);
console.log(프로퍼티s);