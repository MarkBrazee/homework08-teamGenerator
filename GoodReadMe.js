

// dependencies
const inquirer = require("inquirer")
const fs = require("fs");



// array of questions for user
    // GitHub username
    // email address
    // Project name
    // Description of the project
    // Installation instructions
    // Usage instructions
    // Contribution guidelines
    // Test instructions


// Array of questions
const questions = [ {
    
    type: "input",
    message: "What is your GitHub username",
    name: "ident",
    },
{
    type: "input",
    message: "What is your name?",
    name: "name",
    },
{    
    type: "input",
    message: "What is your email address",
    name: "email",
    },
{
    type: "input",
    message: "Enter Project Name",
    name: "projName",
    },
{
    type: "input",
    message: "Description of the project",
    name: "descript",
    },
{
    type: "input",
    message: "Installation instructions",
    name: "install",
    },
{
    type: "input",
    message: "Usage instructions",
    name: "usage",
    },
{
    type: "input",
    message: "Contribution instructions",
    name: "cont",
    },
{
    type: "input",
    message: "Test instructions",
    name: "test",
    
// {
//     type: "checkbox",
//     message: "Select a license",
//     name: "license",
//     choices: [
//       "MIT", 
//       "FreeBSD", 
//       "Beerware", 
//       "BSD License",
//     ]
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}   

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(({
            ident, name, email, projName, descript, install, usage, cont, test,
    }) => {
        const markdown = `
# Project Name: ${projName}

### Description of the Project: 

${descript}

### Installation instructions: 

${install}

### Usage instructions: 

${usage}

### Contribution instructions: 

${cont}

### Test instructions: 

${test}

### Questions? 

Contact ${name} at: ${email} or at github.com/${ident}

`
        writeToFile("ReadMe.md", markdown)
    })
}


// function call to initialize program
init();
