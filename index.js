const inquirer = require("inquirer");

inquirer.prompt([

    // {
    //     type: "input",
    //     name: "username",
    //     message: "What is your GitHub username?",
    // },
    // {
    //     type: "input",
    //     name: "projectitle",
    //     message: "What is your Project Title?",
    // },
    // {
    //     type: "editor",
    //     name: "description",
    //     message: "Describe your project. Notepad will open; 'x' and save when you're done",
    // },
    {
        type: "list",
        name: "contents",
        message: "Do you need a table of contents?",
        choices: ["yes", "no"],
    },
    // {
    //     type: "input",
    //     name: "installation",
    //     message: "What installations do you need?",
    // },
    // {
    //     type: "input",
    //     name: "usage",
    //     message: "Provide examples of use.",
    // },
    // {
    //     type: "list",
    //     name: "license",
    //     message: "Include a field for license?",
    //     choices:["yes", "no"]
    // },
    // {
    //     type: "input",
    //     name: "contributing",
    //     message: "List your collaborators, if any. separated by '-'",
    // },
    //     type: "editor",
    //     name: "tests",
    //     message: "Start a test for your project. Notepad will open; 'x' and save when you're done",
    // },
    // {
    //     type: "input",
    //     name: "questions",
    //     message: "Start some questions here.",
    // },

])
    // .then(answers => { })

    .then(answers => {
        // console.log(answers.username);
        // console.log(answers.projectitle);
        console.log(answers.description);
        console.log("end of logs");

    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
    })




// const questions = [

// ];

// function writeToFile(README.md, data) {
// }

// function init() {

// }

// init();
