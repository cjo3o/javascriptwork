const arr = Array.from({length:6}, (_, i) => {
    return 2;
})

const arr2 = Array.from([1,2,3,4], (item, index) => {
    console.log(`item: ${item}`);
    console.log(`index: ${index}`);
    return 2;
})

console.log(arr);
