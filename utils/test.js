var inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },

        /* Pass your questions in here */
    ])
    .then(answers => {
        console.log(answers.username)
        console.log("test!")
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

