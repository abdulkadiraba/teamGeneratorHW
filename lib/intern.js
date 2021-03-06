// This class inherits name, id, email from Employee.
const Employee = require(`./employee.js`);

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return `Intern`;
    }
}

module.exports = Intern;