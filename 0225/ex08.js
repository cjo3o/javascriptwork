function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    }
}

const circle = new Circle(5);
const circle2 = new Circle(10);

console.log(circle)
console.log(circle2);
console.log(circle.getDiameter());
console.log(circle2.getDiameter());