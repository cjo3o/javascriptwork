const myIter = {
    [Symbol.iterator]() {
        let cul = 1;
        const max = 5;
        return {
            next() {
                return {
                    value: cur++,
                    done: max < cur
                }
            }
        };
    }
};
// 객체안에 [Symbol.iterator] 생성을하면
// 생성된 메서드는 객체를 리턴해야 하고
// 리턴된 객체 안에서는 next() 함수가 생성되고
// next함수는 value와 done을 반환하는 객체
// for of 로 나열이 가능하다
for (const element of myIter) {
    console.log(element);
}