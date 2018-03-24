function variables() {
    const name = 'Pero';
    let age = 25;
    const skills = {
        dotnet: true,
        javascript: true,
    };

    if (true) {
        const name = 'Pero2';
        let age = 27;
        const skills = {
            dotnet: false,
            javascript: false,
        };

        // name = '2oreP'; // ERROR
        age = 72;
        skills.dotnet = true;
    }

    // name = 'oreP'; // ERROR
    age = 52;
    skills.javascript = false;
}

function strings() {
    const firstName = "Pero";
    const lastName = 'Peric';
    const fullName = `${firstName} ${lastName}`;

    const introduction = `
        Hello, I am ${fullName}.
        I know JS and .NET.
    `;
}

function objects() {
    const skills = {
        dotnet: true,
        javascript: true,
    };

    const application = {
        firstName: 'Pero',
        lastName: 'Peric',
        skill: skills.toString(),
        skills,
        talk() {
            console.log('Talking...')
        },
        [skills.dotnet]: true,
    }
}

function arrays() {
    const skills = ['dotnet', 'javascript'];
    skills.push('java');

    const dotnet = skills[0];
    const javascript = skills[1];
    const java = skills.pop();

    const length = skills.length;
    skills.reverse();
}

function json() {
    const application = {
        name: 'Pero',
        age: 25,
        skills: ['dotnet', 'javascript'],
    };

    const json = JSON.stringify(application);
    const application2 = JSON.parse(json);
}

variables();
strings();
objects();
arrays();
json();