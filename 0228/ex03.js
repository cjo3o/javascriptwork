const obj = {
    age: 20,
    name: 'John',
    aa: function () {
        console.log('Hello World!');
    },
    get fullName() {
        return `이름 ${this.name} 나이 ${this.age}`;
    }
}

function aa(num,num) {
    console.log('test');
}

console.log(Object.prototype);
console.log(Object.getOwnPropertyDescriptors(object.prototype,'___proto___'));