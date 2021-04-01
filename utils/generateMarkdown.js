// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![gitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [license](#license)\n`;

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This project is licensed under ${license} license`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage) 
${renderLicenseLink(data.License)}
* [Contributions](#Contributions)
* [Tests](#Tests)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}

## Badges

${renderLicenseBadge(data.badges)}

## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}

`;
}

module.exports = generateMarkdown;
