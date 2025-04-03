class AA {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
}

class BB extends AA {
    // constructor는 안적어도 자동으로 적혀져있는 상태
    // 생략가능
    constructor(...restArgs) {
        super(...restArgs);
    }
}