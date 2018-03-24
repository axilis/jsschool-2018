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

    grade() {
        let sum = 0;
        for (let skill of this.skills) {
            sum += this.skill.value;
        }
        return sum;
    }
}