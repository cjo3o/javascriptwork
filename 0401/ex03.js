class AA {
    static MYNUM = 10;

    doA() {
        console.log(`doA`);
    }
    doB() {
        console.log('doB');
    }
}

const aa = new AA();
aa.doB();
console.log(AA.MYNUM);

aa.doA();
console.log(AA.MYNUM);