// 접근자 프로퍼티

const person = {
    fname: "John",
    lname: "January",
    get fullName() {
        return this.fname + this.lname;
    },
    set fullName(fullName) {
        [this.fname, this.lname] = fullName.split(" ");
    }
}

console.log(person.fullName);
person.fullName = "dd January";
console.log(person.fullName);