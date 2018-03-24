class Application {
    constructor(firstName, lastName, occupation, skills = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.skills = skills;
        this.age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set dateOfBirth(value) {
        const now = new Date().getMilliseconds();
        const dateOfBirth = new Date(value).getMilliseconds();

        const yearsSinceLinuxEpoch = new Date(now - dateOfBirth).getFullYear();
        const yearOfLinuxEpoch = new Date(0).getFullYear();

        this.age = yearsSinceLinuxEpoch - yearOfLinuxEpoch;
    }

    grade() {
        return this.skills.length;
    }

    static forEvent() {
        return 'JavaScript School';
    }
}

const peroApplication = new Application('Pero', 'Peric', 'Student', ['dotnet', 'javascript']);
const ivoApplication = new Application('Ivo', 'Ivic', 'Student');