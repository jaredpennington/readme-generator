// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown.js");
var licenses = [
  "Mozilla Public License 2.0",
  "Apache License 2.0",
  "MIT License",
  "Boost Software License 1.0",
];
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

