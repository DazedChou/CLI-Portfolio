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
    const {name, location, bio, linkedin, github} = answers;
    console.log(name);
    const htmlfile = '<!DOCTYPE html><html><head><meta charset=\'UTF-8\'><meta http-equiv="X-UA-Compatible" content="ie=edge"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="styles.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>HTML Portfolio Generator</title></head><body class="bg-grey"><div class="jumbotron text-center bg-light m-4 p-4"><h1 class="display-4">Hello, Im '+name+'based in '+location+ '</h1><p class="lead" id="bio">'+bio+'</p><hr class="my-4"><p class="lead d-flex flex-column"><a  href="'+linkedin+'">Link to my Linked In</a><a  href="'+github+'">Link to my Github</a></p></div></body><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"crossorigin="anonymous"></script></html>'
    fs.writeFile('index2.html', htmlfile, (err) => {
        console.error(err);
      });
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });