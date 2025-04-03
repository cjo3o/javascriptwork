function sum(...numbers) {
    numbers.reduce((a, b) => {
        console.log(` a = ${a}`);
        console.log(` b = ${b}`);
    })
}

