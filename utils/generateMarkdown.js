const fs = require('fs')
function renderLicenseBadge(license) {
  if(!license){return ''}
  else{
    const licenseBadge=`[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
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
  
  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## License 
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}
  ## Contribution
    ${data.contributions}
  ## Tests
    ${data.test}
  ## Questions
    ${data.questions}
`;
}

module.exports = generateMarkdown;
