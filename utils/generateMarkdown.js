function GenerateTableOfContents(confirm)
{
  // The table of contents is optional. If the user confirms they wish to use the
  // table of contents, build it, otherwise, return a empty string. Multiple lines
  // used for ease of reading.
  let message = '';
  if (confirm)  
  {
    message = `## Table of Contents`;
    message += `\n\n- [Installation](#installation)`;
    message += `\n- [Usage](#usage)`;
    message += `\n- [License](#license)`;
    message += `\n- [Contributing](#contributing)`;
    message += `\n- [Tests](#tests)`;
    message += `\n- [Questions](#questions)`;
    message += `\n`;
  }
  
  return message;
}

function RenderLicense(license)
{
  // Return a license badge and link to license text based on which license is passed in.
  // If there is no license, return an empty string.
  let licenseData = {};

  switch(license)
  {
    case 'Apache 2.0': {
      licenseData = {
        "badge": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
        "link": "This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0)."
        }
      break;
    } 
    case 'GNU GPL 3.0': {
      licenseData = {
        "badge": "[![License: GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
        "link": "This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)."
        }
      break;
    }
    case 'ICS': {
      licenseData = {
        "badge": "[![License: ICS]()",
        "link": "This project is licensed under the [ISC License](https://choosealicense.com/licenses/isc/)."
        }
      break;
    } 
    case 'MIT': {
      licenseData = {
        "badge": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
        "link": "This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)."
        }        
      break;
    }
    default: {
      licenseData = {
        "badge": "",
        "link": ""
        }
      break;
    }
  } 

  return licenseData;
}

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
      let markdownText = `# ${data.title}\n\n`
      // license badge goes here
      markdownText += `## Description\n\n${data.description}\n\n`;
      markdownText += `${GenerateTableOfContents(data.table_of_contents)}`;
      markdownText += `## Installation\n\n${data.installation}\n\n`;
      markdownText += `## Usage\n\n${data.usage}\n\n`;
      // license section goes here
      // license link go here
      markdownText += `## Contributing\n\n${data.contributing}\n\n`;
      markdownText += `## Tests\n\n${data.tests}\n\n`;
      markdownText += `## Questions\n\nIf you have any questions, contact the developer at:\n\n`;
      markdownText += `- GitHub: [${data.github}](https://github.com/${data.github})\n\n- Email: ${data.email}`;
      return markdownText;
}

module.exports = GenerateMarkdown;