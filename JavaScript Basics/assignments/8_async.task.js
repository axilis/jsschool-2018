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

async function getApplications() {
    const data = await fetch('api/applications', { method: 'GET' });

    return JSON.parse(data).map(application => new Application({
        ...application,
        skills: application.skills.map(skill => new Skill(skill))
    }));
}