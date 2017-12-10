function Student(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', {value: () => config.course});
    }
}

@Student({
    course: 'Angular 5'
})
class User {
    constructor(private firstname, private lastname) {
    }

    public getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}

const newStudent = new User('John', 'Snow');
console.log(newStudent.course());

