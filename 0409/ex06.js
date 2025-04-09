const arr = [1, 2, 3, 4, 5, 6];

const iter = arr[Symbol.iterator]();

for (;;) {
    const result = iter.next();

    console.log(result);

    if (result.done) break;
}