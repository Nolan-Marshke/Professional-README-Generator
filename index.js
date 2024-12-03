// TODO: Include packages needed for this application

import inquirer from "inquirer";
import { writeFile } from "fs/promises";
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection, renderTechnologies } from "./utils/generateMarkdown.js";


const questions = [
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What does your project do?"
    },
    {
        type: "input",
        name: "license",
        message: "What license is your project under?"
    },
    {
        type: "input",
        name: "contact",
        message: "Who can users contact for questions or issues?"
    },
    {
        type: "input",
        name: "technologies",
        message: "List the technologies used (comma-separated):"
    }
];


async function writeToFile(fileName, data) {
    try {
        await writeFile(fileName, data);
        console.log("Success! README.md has been generated.");
    } catch (err) {
        console.error("Error writing file:", err);
    }
}


function generateReadMe(data) {
    const technologies = data.technologies 
        ? data.technologies.split(",").map((tech) => tech.trim()) 
        : []; 

    return `
# ${data.projectName}
${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderLicenseSection(data.license)}

${renderTechnologies(technologies)}

## Contact Information
- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})
- Contact Person: ${data.contact}
`;
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMeContent = generateReadMe(answers);
            writeToFile("README.md", readMeContent);
        })
        .catch((err) => {
            console.log(err);
        });
}


init();
