new Promise((resolve) => {
    resolve("정상");
}).then((res) => {
    console.log(res);
}).finally(() => {
    console.log("무조건 실행");
});

new Promise((resolve, reject) => {
    reject("에러");
}).then((res) => {
        console.log(res);
    },
    (err) => {
        console.log(err);
    })