// Import the `fse` module to enable interaction with the file system and easily allow a folder be created if it does not exist.
const fse = require('fs-extra');
// Import inquirer to facilitate asking users questions.
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create questions to ask user to populate file with.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: `Enter a short description of the project explaining the what, why, and how of the project. Use the following questions as a guide:
        
        What was your motivation?
        Why did you build this project?
        What problem does it solve?
        What did you learn?
        
        ?`,
      },
      {
        type: 'confirm',
        name: 'table_of_contents',
        message: 'Include table of contents?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['Apache 2.0', 'GNU GPL 3.0', 'ICS', 'MIT'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
];


function WriteToFile(fileName, data) {
  // Write the file to the specified location with the specified name.
  // Here fs-extra (fse) will create the output folder if it does not exist.
  fse.outputFile(fileName, data, err => {
    if(err) {
      console.log(err);
    } else {
      console.log('README.md file has been generated to the output folder!');
    }
  })
}

function init() {
  // Kick off the program by prompting users with questions.
  inquirer.prompt(questions).then((answers) => {
    // Use the provided answers to create the contents of the file.
    const markdown = generateMarkdown(answers);
    //  Call function to actually write the file. Pass in path, file name, and text contents.
    WriteToFile('./output/README.md', markdown);
  });
}

// Initialize app
init();