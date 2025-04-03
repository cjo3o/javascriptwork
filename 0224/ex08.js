const person = {
    // 데이터 프로퍼티
    name: '홍길동',
    age: 20,

    // 접근자 프로퍼틸
    get nameAge() {
        return `name ${name} age = ${age}`;
    },

    set nameAge(arg) {
        this.name = arg.name;
        this.age = arg.age;
    }
}