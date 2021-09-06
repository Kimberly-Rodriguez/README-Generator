// packages needed for this application

// require inquirer
// require 'fs' package which is built into Node (and we dont have to download)
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./keyfile/generateMarkdown.js");

// Array of questions

const questions = [
  "What is your Github username?",
  "What is your email?",
  "What is the tittle of your project?",
  "Please enter a description of your project:",
  "Please enter a short note on the installation process of your project:",
  "Please submit a short discription of your application's usage:",
  "Please select a license that best support your app:",
  "Please note all contributiors to your project:",
  "Please input any test description to your application:"
]


// A function to write README file
function writeToFile(fileName, data) {
  let licenseBadge = generateMarkdown.renderLicenseBadge(data.license);
  let licenseLink = generateMarkdown.renderLicenseLink(data.license);
  let licenseText = generateMarkdown.renderLicenseSection(data.license, data.contributors);

  let readMe =`# ${data.title} ${licenseBadge}                

  
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Test](#test)
* [Contact](#contact)



## Description
${data.description}

## Installation 
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## License
${data.license} Link: ${licenseLink} ${licenseText}

## Tests
${data.test}

## Contact 
If you have any questions about my work or wish to collaborate in the future please contact me via my email OR find me on GitHub: ${data.email} , ${data.username}>`
    
  fs.writeFile(fileName, readMe, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// function to initialize app and array of questions for user input
function init() {
  inquirer
    .prompt([
        {
          type: 'input',
          message: 'question[0]',
          name: 'username',
          
        },
        {
          type: 'input',
          message: 'question[1]',
          name: 'email',
        
        },
        {
          type: 'input',
          message: 'question[2]',
          name: 'title',
        
        },
        {
          type: 'input',
          message: 'question[3]',
          name: 'description',
        
        },
        {
          type: 'input',
          message: 'question[4]',
          name: 'installation',
        
        },
        {
          type: 'input',
          message: 'question[5]',
          name: 'usage',
        },
        {
          type: 'list',
          message: 'question[6]',
          choices: ["MIT", "IBM", "Mozilla", "Other"],
          name: 'license',
        
        },
        {
          type: 'input',
          message: 'question[7]',
          name: 'contributors',
        
        },
        {
          type: 'input',
          message: 'question[8]',
          name: 'test',
        },
      ])

      .then((response) => {
        let filename = `${response.title}` + ".md"
        writeToFile(filename, response);
      });

}

// Function call to initialize app
init();


