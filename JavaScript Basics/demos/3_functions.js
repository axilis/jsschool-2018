function createApplication(name, occupation, skills = []) {
    const application = {
        name,
        occupation,
        skills,
    };

    return application;
}

function getBestApplication(applications, gradingFunction) {
    let bestApplication;
    let bestGrade = Number.MIN_VALUE;
    for (let i = 0; i < applications.length; i++) {
        const grade = gradingFunction(applications[i]);
        if (grade > bestGrade) {
            bestGrade = grade;
            bestApplication = applications[i];
        }
    }
    return bestApplication;
}

const peroApplication = createApplication('Pero', 'Student', ['dotnet', 'javascript']);
const ivoApplication = createApplication('Ivo', 'Student');

const bestApplication = getBestApplication(
    [peroApplication, ivoApplication],
    application => application.skills.length
);