const person = {name: 'Lee'};

//추가 x, 삭제 o, 프로퍼티 값 변경 o
Object.preventExtensions(person);
person.age = 20;

console.log(person);

//추가 x, 삭제 x, 프로퍼티 값 변경 o
Object.seal(person);

//추가 x, 삭제 x, 프로퍼티 값 변경 x
Object.freeze(person);