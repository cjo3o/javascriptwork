class A {
    constructor(aa, bb) {
        this.aa = aa;
        this.bb = bb;
    }
}

class B extends A {
    constructor(aa, bb, cc) {
        super(aa, bb);
        this.cc = cc;
    }
}

const me = new B(10, 20, 30);
console.log(me);