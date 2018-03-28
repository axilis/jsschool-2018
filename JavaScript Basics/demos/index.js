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

function mapApplicationFromHtml() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const occupation = document.getElementById('occupation').value;
    const skills = document.getElementById('skills').value || '[]';

    return new Application({
        firstName,
        lastName,
        occupation,
        skills: JSON.parse(skills).map(skill => new Skill(skill))
    });
}

function mapApplicationsFromApi(applications) {
    return applications.map(application => new Application({
        ...application,
        skills: application.skills.map(skill => new Skill(skill))
    }));
}

function getTopApplications(applications) {
    const topApplications = applications
        .filter(application => application.skills.length > 2)
        .map(application => ({
            fullName: application.fullName,
            grade: application.grade()
        }));
    topApplications.sort((left, right) => left.grade > right.grade ? -1 : 1);
    return topApplications;
}

async function getApplications() {
    const data = await fetch('api/applications', { method: 'GET' });
    const applications = mapApplicationsFromApi(JSON.parse(data));

    const topApplications = getTopApplications(applications);

    topApplications.forEach((application, index) => {
        const timeout = 500 * (index + 1);

        setTimeout(
            () => console.log('GET: ', application),
            timeout
        );
    });
}

async function postApplication() {
    const newApplication = mapApplicationFromHtml();
    await fetch('api/applications', { method: 'POST', body: JSON.stringify(newApplication) });
    console.log('SAVE: ', newApplication);
}
