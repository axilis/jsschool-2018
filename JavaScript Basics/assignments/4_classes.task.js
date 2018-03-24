class Skill {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    evaluation() {
        return this.value;
    }
}

class ProgrammingLanguage extends Skill {
    constructor(name, value) {
        super(name, value);
    }

    evaluation() {
        if (this.name === 'javascript') {
            return 2 * this.value;
        } else if (this.name === 'dotnet') {
            return 1.5 * this.value;
        } else {
            return 1.2 * this.value;
        }
    }
}

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
        let sum;
        for (let i = 0; i < this.skills.length; i++) {
            sum += this.skills[i].evaluation();
        }
        return sum;
    }

    static forEvent() {
        return 'JavaScript School';
    }
}

const peroSkills = [
    new Skill('dotnet', 5),
    new Skill('javascript', 4),
];
const peroApplication = new Application('Pero', 'Peric', 'Student', peroSkills);
const ivoApplication = new Application('Ivo', 'Ivic', 'Student');