function createApplication(name, occupation, skills = []) {
    const application = {
        name,
        occupation,
        skills,
    };

    return application;
}

function getTopApplications(allApplications, minimum, gradingFunction) {
    let topApplications = [];
    for (let i = 0; i < allApplications.length; i++) {
        const grade = gradingFunction(allApplications[i]);
        if (grade > minimum) {
            topApplications.push(allApplications[i]);
        }
    }
    return topApplications;
}

const peroApplication = createApplication('Pero', 'Student', ['dotnet', 'javascript']);
const ivoApplication = createApplication('Ivo', 'Student');

const topApplications = getTopApplications(
    [peroApplication, ivoApplication],
    1,
    application => application.skills.length
);