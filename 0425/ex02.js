async function aa() {
    return ('test');
}

const baa = await aa();
console.log(baa);

aa().then((baa) => {
    console.log(baa);
})