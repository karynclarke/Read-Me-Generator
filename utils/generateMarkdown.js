function generateMarkdown(data) {
    return `
## ${data.name}
# ${data.projectTitle}
![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)
>  ${data.description}
##${data.tableOfContents}
##${data.installation}
#${data.usage}
#${data.contributors}
##${data.testRun}
######${data.email}

`;
}

module.exports = generateMarkdown;