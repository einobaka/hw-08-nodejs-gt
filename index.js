const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "username",
        message: "Please provide your GitHUb username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email.",
    },
    {
        type: "input",
        name: "title",
        message: "Please provide a Project Title.",
        default: "Default: TBD",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a Project Description.",
        default: "Default: TBD",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Please provide a step-by-step description of how to get the development environment running.",
        default: "Default: TBD"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        default: "Default: TBD",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license would you like to generate?",
        choices: [
            "MIT",
            "GNU ",
            "Mozilla",
            "None",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide a contributing section.",
        default: "Default: Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide some tests",
        default: "Default: TBD",
    },

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {

    inquirer.prompt(questions)
        .then((userResponses) => {
            // console.log(userResponses);
            writeToFile("README.md", generateMarkdown({ ...userResponses }));
        })

}
init();
