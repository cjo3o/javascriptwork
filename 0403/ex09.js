function snakeToCamel(str) {
    console.log(str);
    console.log(str.match(/_[a-z]/));

    return str.replace(/_[a-z]/g, ele => {
        console.log(ele);
        return ele[1].toUpperCase();
    })
}

console.log(snakeToCamel("hello_world"));
console.log(snakeToCamel("a_b_c_d"));