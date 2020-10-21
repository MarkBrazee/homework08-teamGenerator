const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor( name, role, id, email, offNum) {
        this.offNum = offNum;

        super(name, role, id, email)
    }
}

module.exports = Manager