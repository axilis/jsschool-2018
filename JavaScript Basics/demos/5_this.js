class Skill {

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

class Application {
    constructor(firstName, lastName, occupation, skills = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.skills = skills;
    }

    get factor() {
        if (this.occupation === 'student') {
            return 1.5;
        }
        return 1;
    }

    grade() {
        let sum = 0;
        this.skills.forEach(skill => {
            sum += (this.factor * skill.value);
        });
        return sum;
    }
}