class Skill {
    constructor({ name, value }) {
        this.name = name;
        this.value = value || 0;
    }
}

class Application {
    constructor({ firstName, lastName, occupation, skills }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation || 'student';
        this.skills = skills || [];
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }

    grade() {
        return this.skills.reduce(
            (sum, skill) => sum + skill.value,
            0
        );
    }
}

function getTopApplications(applications) {
    return applications
        .filter(application => application.skills.length > 2)
        .map(application => ({
            fullName: application.fullName,
            grade: application.grade()
        }))
        .sort((left, right) => left.grade > right.grade ? -1 : 1);
}

const applications = [
    new Application({ firstName: 'Pero', lastName: 'Peric' }),
    new Application({ firstName: 'Ivo', lastName: 'Ivic' }),
];

const topApplications = getTopApplications(applications);