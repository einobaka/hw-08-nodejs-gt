const inquirer = require('inquirer');
const badge = require('badges-maker');
const fs = require("fs");

inquirer
    .prompt([
        // {
        //     type: "input",
        //     name: "username",
        //     message: "What is your GitHub username?",
        // },
        // {
        //     type: "input",
        //     name: "title",
        //     message: "Proect Title?",
        // },
        // {
        //     type: "input",
        //     name: "description",
        //     message: "Describe you Project",
        // },
        // {
        //     type: "input",
        //     name: "tableOfContents",
        //     message: "Do you need a table of contents? If so how many? (Numeric Entry)",
        // },
        // {
        //     type: "input",
        //     name: "installation",
        //     message: "installation packet",
        // },
        // {
        //     type: "input",
        //     name: "usage",
        //     message: "usage",
        // },
        // {
        //     type: "input",
        //     name: "license",
        //     message: "license",
        // },
        //     type: "input",
        //     name: "license",
        //     message: "license",
        // },
        //     type: "input",
        //     name: "tests",
        //     message: "tests",
        // },
        //     type: "input",
        //     name: "questions",
        //     message: "questions",
        // },
        {
            type: "list",
            name: "badge",
            message: "Would you like to include a badge?",
            choices: [
                "yes",
                "no",
            ]
        },

        // {
        //     type: 'editor',
        //     name: 'story',
        //     message: 'Tell me a story, a really long one!',
        // },
    ])
    .then(answers => {
        // console.log(answers.badge);
        //   if (answers.badge === "yes") {
        //     console.log("works");
        // }

        if (answers.badge === "yes") {
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "badgeCreate",
                    message: "Lets make that badge!",
                },
                {
                    type: "input",
                    name: "badgeName",
                    message: "What is the badge name?",
                },
                {
                    type: "number",
                    name: "badgeVersion",
                    message: "What is the badge version (numeric)?",
                },
                {
                    type: "list",
                    name: "badgeColor",
                    message: "Select a badge color:",
                    choices: [
                        "red",
                        "yellow",
                        "green",
                        "blue",
                        "orange",
                        "violet",
                    ]
                },
            ])
                .then(badgeAnswer => {

                    newbadge = badge.create("\"" + badgeAnswer.badgeName + "\"", "\"" + "V." + badgeAnswer.badgeVersion + "\"", "\"" + badgeAnswer.badgeColor + "\"");
                    console.log(newbadge);

                })
                .catch(error => {
                    if (error.isTtyError) {
                        // Prompt couldn't be rendered in the current environment
                    } else {
                        // Something else when wrong
                    }
                });
        }

        // console.log(answers.username)
        // console.log("test!")
        // console.info('Answer:', answers.story);
        // console.info(answers.badge)
        // Use user feedback for... whatever!!

    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

