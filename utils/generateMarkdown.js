function generateMarkdown(data) {
    return `

    # Project Title
    ${data.projectTitle}

    ![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)

    ## Project Description
    >  ${data.description}

    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    
    ## Installation Steps
    ${data.installation}
    
    ## Commands Needed to Use 
    #${data.usage}
    
    ## Contributors
    #${data.contribute}
    
    ## How to Test
    #${data.testRun}
    
    ## Contact Info
    #${data.name}
    #${data.email}
    
    `;
}
/*
## Table of Contents
${data.tableOfContents}
*/

module.exports = generateMarkdown;