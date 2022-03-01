// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  ## Badges

${data.badges}

  # ${data.title}

## Description 

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)  

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contribute

${data.contribution}

## Tests

${data.test}

## Questions

  ### Github

  [Personal Page](https://${data.github}.github.io)

  If you have any questions, you can reach me at <${data.email}>

`;
}

module.exports = generateMarkdown;
