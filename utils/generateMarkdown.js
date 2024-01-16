// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  /* Badge links
    
    Apache 2.0: https://img.shields.io/badge/License-Apache%202.0-blue.svg
    GNU GPL 3.0: https://img.shields.io/badge/License-GPLv3-blue.svg
    ICS: No link found
    MIT: https://img.shields.io/badge/License-MIT-yellow.svg

    If there is no license, return an empty string
  */
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  /* License links
    
    Apache 2.0: https://opensource.org/licenses/Apache-2.0
    GNU GPL 3.0: https://www.gnu.org/licenses/gpl-3.0
    ICS: https://choosealicense.com/licenses/isc/
    MIT: https://opensource.org/licenses/MIT

    If there is no license, return an empty string
  */
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  /*Put all the data together in the format is should be rendered in.
  
    Title
    
    [license badge]

    Description

    [description text]

    Table of Contents (optional)

      - Installation
      - Usage
      - License
      - Contributing
      - Tests
      - Questions
    
    Installation

    [installation text]

    Usage

    [usage text]

    License

    [license text with link]

    Contributing

    [contributing text]

    Tests

    [test text]

    Questions

    If you have any questions, contact the developer at:
      -GitHub: [github name with link]
      -Email: [email address]

  */
  return `# ${data.title}

`;
}

module.exports = GenerateMarkdown;