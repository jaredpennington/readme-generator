// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");
const { object } = require("webidl-conversions");
const fileName = "sampleREADME";
const extension = "md";
var licenses = [
  "Mozilla Public License 2.0",
  "Apache License 2.0",
  "MIT License",
  "Boost Software License 1.0",
];
var badges = ["[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)","[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)","[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)","[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"];
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation of your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of your project?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What is the contribution of your project?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What size do you need?",
    choices: licenses,
  },
  {
    type: "input",
    name: "github",
    message: "What is the github for your project?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers.title, answers.description, answers);
  for (let i = 0; i < licenses.length; i++) {
      if (answers.license === licenses[i])
        answers.badges = badges[i]
  }

  return writeToFile(fileName, answers, extension);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data, extension) {
  fs.writeFile(`${fileName}.${extension}`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
