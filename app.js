const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```





// Write code to use inquirer to gather information about the development team members,
// create objects for each team member

// Array of questions
    // Name
    // Role
    // ID number
    // email
    // office number
    // school
    // GitHub name

const questions = [ {

    type: "input",
    message: "What is name?",
    name: "name",
    },
{
    type: "input",
    message: "What is role?",
    name: "role",
    },
{
    type: "input",
    message: "What is your ID number?",
    name: "id",
    },
{
    type: "input",
    message: "What is your email?",
    name: "email",
    },
{
    type: "input",
    message: "What is your office number?",
    name: "offNum",
    },
{
    type: "input",
    message: "What school did you attend?",
    name: "school",
    },
{
    type: "input",
    message: "What is your GitHub name?",
    name: "gitHub",

}];

// create objects for all employees

function Employees(name, role, id, email, offNum, school, gitHub) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.offNum = offNum;
    this.school = school;
    this.gitHub = gitHub;
}

Employees.prototype.printStats = function() {
    console.log("Name: " + this.name + "Role: " + this.role + "Id: " + this.id + "Email: " + this.email + "Office number: " + this.offNum + "School: " + this.school + "GitHub: " + this.gitHub);

    console.log("\n---------\n");
};


// function to write to file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
} 

function init() {
    inquirer.prompt(questions)
}




// function call to initialize program
init();