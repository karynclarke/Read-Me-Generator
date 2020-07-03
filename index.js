const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown")

const questions = [{
        type: "input",
        name: "projectTitle",
        message: "What is your project's title?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the project",
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Add the Table of Contents, separating elements by a comma",
    },
    {
        type: "input",
        name: "installation",
        message: "What commands are needed to install the project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What commands are needed to use the project?",
    },
    {
        type: "license",
        name: "license",
        message: "What is the license for the project?",
        choices: ["MIT", "Apache", "GNU"],
    },
    {
        type: "contribute",
        name: "contribute",
        message: "Were there any contributers to the project?",
    },
    {
        type: "input",
        name: "testRun",
        message: "How is the project tested?",
        default: "npm test",
    },

    {
        type: "input",
        name: "name",
        message: "What is your github user name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers)
        writeToFile("README.md", generateMarkdown(answers));

    });
}
init();