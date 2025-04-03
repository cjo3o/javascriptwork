function doA(numbers) {
    console.log("doA");
    var answer = [];
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(element);
    }
    return answer;
}



module.exports = doA;