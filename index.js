const fs = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Enter in your bio',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'Enter in your Linkedin URL',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'Enter in your Github URL',
        name: 'github',
      },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });