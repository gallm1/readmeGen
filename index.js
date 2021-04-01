// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Credits:',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache 2.0', 'Boost 1.0', 'MIT', 'None'],
        message: 'License Used:',
    },
    {
        type: 'list',
        name: 'badges',
        choices: ['Apache 2.0', 'Boost 1.0', 'MIT', 'None'],
        message: 'Badges:',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Features:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to Contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile('README.md')
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(results => {writeToFile('README.md', generateMarkdown({ ...results }))})
}

// Function call to initialize app
init();