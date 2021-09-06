function renderLicenseBadge(license) {
  
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  if (license === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license === "Other"){
    return ""
  }
  
}

// function that returns the license link AND If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  }
  if (license === "IBM"){
    return "https://opensource.org/licenses/IPL-1.0"
  }
  if (license === "Mozilla"){
    return "https://opensource.org/licenses/MPL-2.0"
  }
  if (license === "Other"){
    return ""
  }
  
}

// A function that returns the license section of README AND If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license === "MIT") {
    let MITBP = `Copyright [2021] [${name}]
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the 
    Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the 
    Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
    ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH 
    THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

    return MITBP
  }
  if (license === "IBM"){
    let IBMBP = `The IPL is the open-source license IBM uses for some of its software. 
    Supposed to facilitate commercial use of said software; is very clear on the specifics of liability. 
    Also grants explicit patent rights.`
    return IBMBP
  }
  if (license === "Mozilla"){
    let apacheBP = ` MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available 
    under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is,
     by default, compatible with LGPL and GPL version 2 or greater. You can distribute binaries under a proprietary license, as long as you 
     make the source available under MPL.`
    
    return apacheBP
  }
  if (license === "Other"){
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports =
 {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
 }