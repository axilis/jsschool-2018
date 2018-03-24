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

const applications = [
    new Application({ firstName: 'Pero', lastName: 'Peric' }),
    new Application({ firstName: 'Ivo', lastName: 'Ivic' }),
];

applications.forEach((application, index) => {
    const timeout = 500 * (index + 1);

    setTimeout(
        () => console.log('GET: ', application),
        timeout
    );
});