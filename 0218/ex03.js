(function () {
    var a = 10;
    return function (x, y) {
        return x + y + 10;
    };

    var add1 = (function () {
        var a = 10;
        return function (x, y) {
            return x + y + a;
        }
    });
    console.log(add(1,2));
});

