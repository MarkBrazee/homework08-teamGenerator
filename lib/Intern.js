const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constrcutor(name, role, id, email, school) {
        this.school = school;

        super(name, role, id, email)
    }
}

module.exports = Intern