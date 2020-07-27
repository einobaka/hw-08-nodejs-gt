const inquirer = require('inquirer');
const badge = require('badges-maker');
const fs = require("fs");

inquirer
    .prompt([
        // Inquirer prompts
        {
            type: "input",
            name: "title",
            message: "Please provide a Project Title.",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a Project Description. ",
        },
        {
            type: "list",
            name: "tableOfContents",
            message: "Would you like to start a table of contents?",
            choices: [
                "yes",
                "no",
            ]
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Please provide a step-by-step description of how to get the development environment running(skip with enter key if not needed).",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use. Include screenshots as needed (skip with enter key if not needed).",
        },
        {
            type: "input",
            name: "credit",
            message: "Please provide at least one collaborator (if applicable, skip with enter key if not needed).",
        },
        {
            type: "list",
            name: "license",
            message: "Would you like to start a license section?",
            choices: [
                "yes",
                "no",
            ]
        },
        {
            type: "list",
            name: "badge",
            message: "Would you like to include a badge?",
            choices: [
                "yes",
                "no",
            ]
        },
        {
            type: "list",
            name: "contributing",
            message: "Would you like to include a contributing section?",
            choices: [
                "yes",
                "no",
            ]
        },
        {
            type: "list",
            name: "test",
            message: "Would you like to include a test section?",
            choices: [
                "yes",
                "no",
            ]
        },
    ])
    .then(answers => {

        // Title
        if (answers.title !== "") {
            fs.appendFile("README.md", `# ${answers.title} ${"\n"}${"\n"}`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        }
        else {
            console.log("no title")
        }

        // Description
        if (answers.description !== "") {
            fs.appendFile("README.md", `## Descrtiption ${"\n"}${"\n"} ${answers.description} ${"\n"}${"\n"}`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        }
        else {
            console.log("no description")
        }

        // Table of contents
        if (answers.tableOfContents === "yes") {
            fs.appendFile("README.md", `## Table of Contents ${"\n"}${"\n"} (sample) ${"\n"}${"\n"} * [Installation](#installation) ${"\n"}${"\n"}`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        }
        else {
            console.log("no table of contents")
        }

        // Installation
        if (answers.installation !== "")
            fs.appendFile("README.md", `## Installation ${"\n"}${"\n"} ${answers.installation} ${"\n"}${"\n"}`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        else {
            console.log("no installation")
        }

        // Usage
        if (answers.usage !== "")
            fs.appendFile("README.md", `## Usage ${"\n"}${"\n"} ${answers.usage} ${"\n"}${"\n"}`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        else {
            console.log("no usage")
        }

        // Credits
        if (answers.credit !== "") {
            fs.appendFile("README.md", `## Collaborator ${"\n"}${"\n"} - ${answers.credit} ${"\n"}${"\n"}`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        }
        else {
            console.log("no credits")
        }
        //License
        if (answers.license === "yes") {
            fs.appendFile("README.md", `## License ${"\n"}${"\n"} Insert License Here ${"\n"}${"\n"} --- ${"\n"}${"\n"} `,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        }
        else {
            console.log("no table of contents")
            fs.appendFile("README.md", `${"\n"}${"\n"} ---`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        }

        // Badge
        if (answers.badge === "yes") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "badgeCreate",
                    message: "Lets make that badge! (Press enter to continute)",
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

                    fs.appendFile("README.md", `## Badges ${"\n"}${"\n"} ${newbadge} ${"\n"}${"\n"}`,
                        function (err) {
                            if (err) {
                                console.log(err);
                            }
                        });
                    console.log("Conclude creation of README.md");
                })
                .catch(error => {
                    if (error.isTtyError) {
                        // Prompt couldn't be rendered in the current environment
                    } else {
                        // Something else when wrong
                    }
                });
        }
        //Contributing
        if (answers.contributing === "yes") {
            fs.appendFile("README.md", `## Contributing ${"\n"}${"\n"} Insert Contributing Here ${"\n"}${"\n"}`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        }
        else {
            console.log("no contribution")
        }
        //Contributing
        if (answers.test === "yes") {
            fs.appendFile("README.md", `## Tests ${"\n"}${"\n"} Insert Tests Here ${"\n"}${"\n"}`,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
        }
        else {
            console.log("no test")
        };

    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });


