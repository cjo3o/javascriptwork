var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = function () {return i};
}

console.log(funcs);