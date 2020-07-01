const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown")

const questions = [{
        type: "input",
        name: "name",
        message: "What is your user name?",
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project's title?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project",
    },
    {
        type: "license",
        message: "What is the license for your project?",
        name: "license",

        choices: ["MIT", "Apache", "GNU"],
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