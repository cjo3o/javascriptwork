class AA {
    // super x
    // constructor 존재
    doA = function () {
        console.log(`일반함수`);
    }
    // super 사용가능
    // constructor 존재 x
    doB() {
        console.log('메서드함수');
    }
    // super x
    // constructor 존재 x
    doC = () => {
        console.log('화살표함수');
    }
}

const aa = new AA();
aa.doA();
aa.doB();
aa.doC();