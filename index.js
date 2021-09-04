// packages needed for this application

// require inquirer
// require 'fs' package which is built into Node (and we dont have to download)
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('generateMarkdown.js');

// function to initialize app and array of questions for user input
function init() {
  inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is your Github username?',
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
          message: 'Please enter a description of your project.',
          name: 'description',
        
        },
        {
          type: 'input',
          message: 'Please enter a short note on the installation process of your project.',
          name: 'installation',
        
        },
        {
          type: 'input',
          message: 'Please submit a short discription of your app\'s usage',
          name: 'usage',
        },
        {
          type: 'list',
          message: 'Please select a license that best support your app.',
          choices: ["MIT", "IBM", "Mozilla", "Other"],
          name: 'license',
        
        },
        {
          type: 'input',
          message: 'Please note all contributions to your project.',
          name: 'contributors',
        
        },
        {
          type: 'input',
          message: 'Please input any test to you application',
          name: 'test',
        
        },
      ])


// fuction to initialize app
.then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
.then(() => console.log('Succes!'))
.catch((err) => console.error(err));

// A function to write README file
function writeToFile(fileName, data) {
  let licenseBadge = generateMarkdown.renderLicenseBadge(data.license);
  let licenseLink = generateMarkdown.renderLicenseLink(data.license);
  let licenseText = generateMarkdown.renderLicenseSection(data.license, data.contributors);

  
  let readMe =`# ${data.title} ${licenseBadge}                
## Description
  
${data.description}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
## Usage
Instructions and Examples For Use:
${data.usageInfo}
## Contributing
List of Collaborators:
${data.contributors}
## License
${data.license} Link: ${licenseLink}
${licenseText}
## Tests
${data.testInstru}
## Questions
If you have any questions about my work or wish to collaborate in the future please contact me at: <krodriguez.ucla@gmail.com>`
    
  fs.writeFile(fileName, readMe, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

}

// Function call to initialize app
init();


