const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, role, id, email, gitHub) {
        this.gitHub = gitHub;

        super(name, role, id, email)
    }
}

module.exports = Engineer