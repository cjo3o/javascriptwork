const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
}

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
}

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());