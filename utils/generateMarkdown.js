const fs = require('fs')
function renderLicenseBadge(license) {
  if(!license){return ''}
  else{
    const licenseBadge=`https://img.shields.io/badge/License-${license}-blue.svg`
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){return ''}
  else{
    const licenseSection = 
    fs.readFile('../LICENSE', 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)
  );
    return licenseSection
  }
}
renderLicenseSection('mit')
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;