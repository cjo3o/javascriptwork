function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`나는 프로토타입 헬로우 ${this.name}`);
}

const me = new Person("John");

me.sayHello = function (){
    console.log(`나는 인스턴스 헬로우 ${this.name}`);
};

me.sayHello();
delete me.sayHello;

me.sayHello();