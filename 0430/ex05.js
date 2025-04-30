const reqData1 = () => {
    return new Promise((resolve => {
        return setTimeout(() => {
            resolve(1)
        }, 3000);
    }))
}
const reqData2 = () => {
    return new Promise(((resolve, reject) => {
        return setTimeout(() => {
            reject(2)
        }, 3000);
    }))
}
const reqData3 = () => {
    return new Promise((resolve => {
        return setTimeout(() => {
            resolve(3)
        }, 3000);
    }))
}

// reqData1().then((result) => {
//     console.log(result);
//     return reqData2();
// })
//     .then((result) => {
//         console.log(result);
//         return reqData3();
//     })
//     .then((result) => {
//         console.log(result);
//     });

const result = await Promise.all([reqData1(), reqData2(), reqData3()]);
console.log(result);