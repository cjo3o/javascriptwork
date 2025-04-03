class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    static daA() {
        console.log('정적 메서드 입니다.')
    }
}

Student.daA();

const stu = new Student();
stu.doA();