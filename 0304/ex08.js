const outerVar = "전역공간";

function outer() {
    let outerVar = "외부 변수";

    return function inner() {
        // inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근 가능
        outerVar += '!';
        console.log(outerVar); // "외부 변수" 출력
    }
}

const out = outer();
out();
out();
out();
