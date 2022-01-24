// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'Apache License v2.0':
      license = 'Apache%202.0';
      break;
    case 'GNU General Public License v3.0':
      license = 'GPL';
      break;
    case 'MIT License':
      license = 'MIT';
      break;
  }

  if (license !== 'None') {
    return `
![badge](https://img.shields.io/badge/License-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'Apache License v2.0':
      return `
  [${license}](https://choosealicense.com/licenses/apache-2.0/)
      `;
      break;
    case 'GNU General Public License v3.0':
      return `
  [${license}](https://choosealicense.com/licenses/gpl-3.0/)
      `;
      break;
    case 'ISC':
      return `
  [${license}](https://choosealicense.com/licenses/isc/)
      `;
      break;
    case 'MIT License':
      return `
  [${license}](https://choosealicense.com/licenses/mit/)
      `;
      break;
    case 'None':
      return `
  [${license}](https://choosealicense.com/licenses/unlicense/)
        `;
        break;
    default:
      return `
  [${license}](https://choosealicense.com/licenses/unlicense/)
        `;        

  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'None') {
    return `
# License
  
    The application is covered under the following license:
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license);

  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test Instructions](#test-instructions)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)

  # Project Description
  ${data.description}

  # Installation
  ${data.installIns}
  
  # Usage
  ${data.usageInfo}

  ${renderLicenseSection(data.license)}

  # Contributions 
  ${data.contributing}

  # Test Instructions 
  ${data.testIns}

  # Questions 
  For additional questions, please contact me at [${data.email}](mailto:${data.email})

  https://github.com/${data.githubuser}
`;
}

module.exports = generateMarkdown;