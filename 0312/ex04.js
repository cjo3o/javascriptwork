// 1. aa(); // this 전역객체
// 2. new aa(); // this {} 생성하는 객체
// 3.

function AA(name) {
    this.name = name;
    console.log(this);
}

AA();

new AA("John");

const aa = {
    name: 'Alice',
    getThis() {
        console.log(this);
    }
}

aa.getThis();