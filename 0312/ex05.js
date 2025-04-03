function foo() {
    this.a = 10;
    this.b = 20;
    console.log(this);
}

//obj -> this가 된다
// const obj = { a: foo, c: 30};
// obj.a();

//this를 빈객체로 할당
// this를 강제로 변경해서 함수 호출 가능
// oo.apply({