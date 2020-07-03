function generateMarkdown(data) {
    return `
    
    # Project Title
    ${data.projectTitle}

    ![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)

    ## Project Description
    >  ${data.description}

    ## Table of Contents
    ${data.tableOfContents}

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

module.exports = generateMarkdown;