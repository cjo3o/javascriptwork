class MyArray extends Array {
    uniq() {
        const MyArr = new Set(this);
        console.log(`유니크 ` + [...MyArr]);
    }

    average() {
        const result = this.reduce((a, b) => a + b);
        console.log(result/this.length);
    }
}

const arr = new MyArray(10, 20, 20, 30, 40);


console.log(arr);
//중복제거 함수
const uniqArr = arr.uniq();
//평균값 함수
const avg = arr.average();