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
        // 
    },
    {
        type: "contributers",
        name: "contributers",
        message: "Were there any contributers to the project?",
    },
    {
        type: "input",
        name: "tests",
        message: "How is the project tested?",
        default: "npm test",
    },
    {
        type: "input",
        name: "repository",
        message: "Where is the project hosted?",
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