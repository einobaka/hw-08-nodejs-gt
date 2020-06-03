const inquirer = require("inquirer");

inquirer.prompt([

    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "projectitle",
        message: "What is your Project Title?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
    },
    // {
    //     type: "input",
    //     name: "contents",
    //     message: "",
    // },
    // {
    //     type: "input",
    //     name: "installation",
    //     message: "",
    // },
    // {
    //     type: "input",
    //     name: "usage",
    //     message: "",
    // },
    // {
    //     type: "input",
    //     name: "license",
    //     message: "",
    // },
    // {
    //     type: "input",
    //     name: "contributing",
    //     message: "",
    // },
    // {
    //     type: "input",
    //     name: "tests",
    //     message: "",
    // },
    // {
    //     type: "input",
    //     name: "questions",
    //     message: "",
    // },

])
    .then(answers => {
        console.log(answers.username);
        console.log(answers.projectitle);
        console.log(answers.description);
        console.log("end of logs");

    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
    });



// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
