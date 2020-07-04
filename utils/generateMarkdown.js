function generateMarkdown(data) {
    return `

# ${data.projectTitle}

<a name="license"></a>
![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)
    
# Project Description
>  ${data.description}
    
    
# Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Credits](#credits)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)

 <a name="installation"></a>
# Installation Steps
  ${data.installation}
    
  <a name="usage"> </a>
# Commands Needed to Use 
   ${data.usage}
   
   <a name="contributers"></a>
## Contributers
   ${data.contributers}
 
   <a name = "tests"> </a>
## How to Test
   ${data.testRun}
    
## GitHub Repository
   ${data.repository}
    
    `;
}
/*
## Table of Contents
${data.tableOfContents}

${data.email}
    */

module.exports = generateMarkdown;