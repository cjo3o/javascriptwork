const throttle = () => {
    let timerId;
    return () => {
        console.log('test')
        if (timerId) {
            return;//break시키겠다.
        }
        //void 함수에요 얘는
        //상위 스코프에 존재하는 timerId에 값을 할당하겠다
        timerId = setTimeout(() => {
            console.log('test22');
            timerId = null;
        }, 4)
    }
}
//aa는 함수 throttle을 바라보는게 아니라 함수 throttle을 실행시키고 반환되는
//익명함수를 바라봄
const aa = throttle();

//aa가 바라보는 timerId는 throttle에 존재하는 timerId
//aa에서 바라보는 timerId는 항상 동일한 timerId
//즉 aa안에서 timerId를 할당,초기화시킬때 aa에서 요구하는 timerId는 같은걸 바라보니까
//뒤에 호출되는 aa에서 값 할당 여부를 체크함
aa();
aa();
aa();
aa();