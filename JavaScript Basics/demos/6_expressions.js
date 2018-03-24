class Skill {
    constructor({ name, value }) {
        this.name = name;
        this.value = value || 0;
    }
}

class Application {
    constructor({ firstName, lastName, occupation, skills }) {
        if (!firstName || !lastName) {
            throw new Error('First and last name are required parameters.')
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation || 'student';
        this.skills = skills || [];
    }
}