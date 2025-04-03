const aa = (x, y) => ({
    x, y
})

const result = aa(10, 20);
console.log(result);


// filter return true false item반환
// map 내맘대로 반환가능
const arr = [{name: 'Lee'}, {name: 'Kim'}, {name: 'Park'}, {name: 'Na'}].map((item,index,arr) => {
    console.log(item);
    console.log(index);
    return;
});