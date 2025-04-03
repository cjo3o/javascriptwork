const person = {
    name: 'John',
    age: 20,
    addr: '대구'
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//객체는 for in
//배열은 for of

for (const element of Object.keys(person)) {
    console.log(element);
}

for (const element of Object.values(person)) {
    console.log(element);
}

for (const element of Object.entries(person)) {
    console.log(element);
}

const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);