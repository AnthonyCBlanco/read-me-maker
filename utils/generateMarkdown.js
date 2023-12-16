const fs = require('fs')
function renderLicenseBadge(license) {
  if(!license){return ''}
  else{
    const licenseBadge=`[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
    return licenseBadge
  }
}


function renderLicenseLink(license) {
  if(!license){return ''}
  else{
    const licenseLink = `https://opensource.org/licenses/${license}`
    return licenseLink
  }
}

function renderLicenseSection(license) {
  if(!license){return ''}
  else{
    const licenseSection = 
    fs.readFile('./LICENSE', 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)
  );
    return licenseSection
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
    ${data.description}
  ## Table Of Contents
  1. [Installation](##Installation)
  2. [Usage](##Usage)
  3. [License](##License)
  4. [Contribution](##Contribution)
  5. [Tests](##Tests)
  6. [Questions](##Questions)
  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## License 
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}
  ## Contribution
    ${data.contribution}
  ## Tests
    ${data.test}
  ## Questions
    ${data.questions}
`;
}

module.exports = generateMarkdown;
