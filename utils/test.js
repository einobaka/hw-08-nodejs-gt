var inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },

        /* Pass your questions in here */
        {
            type: 'editor',
            name: 'story',
            message: 'Tell me a story, a really long one!',
          },
    ])
    .then(answers => {
        console.log(answers.username)
        console.log("test!")
        console.info('Answer:', answers.story);
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

