
const badge = require('badges-maker');

function renderBadge(license) {
  if (license !== "None") {
    let newbadge = badge.create("\"" + license + "\"", "V.0", "blue");
    console.log(newbadge)
    return newbadge;
  }
  else {
    return "";
  }
}

function generateMarkdown(data) {
  return `

# ${data.title}

## Descrption 

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation 

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

---

## License

${renderBadge(data.license)}

## Contributing

${data.contributing}

## Tests

\`\`\`
${data.test}
\`\`\`

## Questions

For more information please find the repository [here](https://github.com/${data.username}/).

For additional quesions please contact me at: ${data.email}

`;
}

module.exports = generateMarkdown;
