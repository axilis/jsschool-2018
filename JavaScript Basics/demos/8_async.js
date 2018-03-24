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
}

async function postApplication() {
    const newApplication = new Application({
        firstName: 'Pero',
        lastName: 'Peric',
    });
    await fetch('api/applications', { method: 'POST', data: JSON.stringify(newApplication) });
}