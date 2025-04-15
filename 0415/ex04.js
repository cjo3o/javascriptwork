const lee = {name: 'lee'};
const kim = {name: 'kim'};

const map = new Map([[lee, 'developer'],
    [kim, 'designer']
]);

console.log(map);

for (const element of map.keys()) {
    console.log(element);
}

for (const element of map.values()) {
    console.log(element);
}

for (const element of map.entries()) {
    console.log(element);
}