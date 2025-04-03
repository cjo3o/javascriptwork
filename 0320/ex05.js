// 상속관계
// 부모클래스 자식클래스

// phone -> 스마트폰

class Phone {
    constructor( number, brand) {
        this.number = number;
        this.brand = brand;
    }
}

class  SmartPhone extends Phone {
    constructor(number, brand, internet) {
        super(number, brand);
        this.internet = internet;
        console.log(this);
    }
}
const phone = new Phone('010-1111-1111', 'lg');
const sp = new SmartPhone('010-1111-1111', '삼성', true);

console.log(phone);
console.log(sp);