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
  // let contributionlink = generateMarkdown.rendercontributors(data.contributors);

  let readMe =`# ${data.title} 

  ${licenseBadge}   
  
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

* [UCLA Extension Coding Bootcamp](https://bootcamp.uclaextension.edu/coding/)

## License
${data.license} Link: ${licenseLink} ${licenseText} ${licenseBadge}


## Tests
${data.test}

##  Questions | Contact 
If you have any questions about my work OR wish to collaborate in the future please contact me via email: ${data.email} OR feel free to connect via GitHub : [${data.username}](https://github.com/Kimberly-Rodriguez).`

    
  fs.writeFile(fileName, readMe, (err) =>
  err ? console.error(err) : console.log('Success!')
);
};

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
          message: 'Please note all contributiors to your project(if you are the only contributor please write your name):',
       
          name: 'contributors',
        
        },
        {
          type: 'input',
          message: 'Please input any test description to your application -- if you dont have any at the moment please write n/a:',
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


