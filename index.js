// packages needed for this application

// require inquirer
// require 'fs' package which is built into Node (and we dont have to download)
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./keyfile/generateMarkdown.js");


// A function to write README file
function writeToFile(fileName, data) {
  let licenseBadge = generateMarkdown.renderLicenseBadge(data.license);
  let licenseLink = generateMarkdown.renderLicenseLink(data.license);
  let licenseText = generateMarkdown.renderLicenseSection(data.license, data.contributors);

  let readMe =`# ${data.title} 

  
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
${data.license} Link:${licenseBadge}


## Tests
${data.test}

## Contact / Questions
If you have any questions about my work or wish to collaborate in the future please contact me via my email OR find me on GitHub: ${data.email} , ${data.username}`
    
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
          message: ' What is your Github username?',
          name: 'username',
          
        },
        {
          type: 'input',
          message: 'What is your email?',
          name: 'email',
        
        },
        {
          type: 'input',
          message: 'What is the tittle of your project?',
          name: 'title',
        
        },
        {
          type: 'input',
          message: 'Please enter a description of your project:',
          name: 'description',
        
        },
        {
          type: 'input',
          message: 'Please enter a short note on the installation process of your project:',
          name: 'installation',
        
        },
        {
          type: 'input',
          message: 'Please submit a short discription of your application\'s usage:',
          name: 'usage',
        },
        {
          type: 'list',
          message: 'Please select a license that best support your app:',
          choices: ["MIT", "IBM", "Mozilla", "Other"],
          name: 'license',
        
        },
        {
          type: 'input',
          message: 'Please note all contributiors to your project:',
          name: 'contributors',
        
        },
        {
          type: 'input',
          message: 'Please input any test description to your application:',
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


