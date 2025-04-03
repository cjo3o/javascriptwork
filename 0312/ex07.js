const obj = {
    value: 100,
    foo() {
        const that = this;
        // console.log(this.value);
        setTimeout(function() {
            console.log('콜백함수');
            // console.log(this)
            // console.log(this.value);
            console.log(that.value);
        }, 2000);
    }
}

obj.foo();