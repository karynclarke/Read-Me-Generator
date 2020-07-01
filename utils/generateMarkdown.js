function generateMarkdown(data) {
    return `
# ${data.name}
## ${data.projectTitle}
![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)
>  ${data.description}


`;
}

module.exports = generateMarkdown;