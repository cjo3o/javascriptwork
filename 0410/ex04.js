function doA(...rest) {
    console.log(rest);
}

doA(1,2,3,4,5);
doA([1,2,3,4,5]);
doA(...[1,2,3,4,5]);