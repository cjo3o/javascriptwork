const base = {
    sayHi() {
        console.log('base sayhi 함수');
    }
}

const derived = {
    __proto__: base,
    sayHi() {
        super.sayHi();
        console.log('derived sayHi함수');
    },
    arrow: () => {
        super.sayHi();
    }
}

derived.sayHi();
derived.arrow();