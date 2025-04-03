const obj1 = {
    name: "John",
    sayHi: function () {
        setTimeout(function () {
            console.log(this.name);
        }.bind(this), 1000);
    }
}

const obj2 = {
    name: 'bob',
    sayHi: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
}

obj1.sayHi();
obj2.sayHi();