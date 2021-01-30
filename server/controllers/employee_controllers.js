const mongoose = require('mongoose');
const Employee = require('../models/employee_models');


//getaAllEmployees
const getaAllEmployees = (req, res) => {

    Employee
        .find()
        .then(employees => {
            return res.status(200).json(
                {
                    data: employees
                });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: 'Something went wrong'
            });
        });

}

//getEmployee
const getEmployee = (req, res) => {
    empId = req.params.empId;

    if (!empId) {
        return res.status(400).json({
            error: "No employee ID is given"
        });
    }

    Employee
        .findById(empId)
        .then(employee => {
            return res.status(200).json({
                data: employee
            });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: 'Something went wrong'
            });
        })


}





//createEmployee
const createEmployee = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            error: "You must provide employee details"
        });
    }
    let newEmpId;
    let newEmployee = {};

    Employee.find()
        .then(employee => {

            if (employee.length === 0) {
                console.log(employee)
                newEmployee = {
                    empid: 1000001,
                    fname: body.fname,
                    lname: body.lname,
                    DOB: body.DOB,
                    grade: body.grade,
                    sex: body.sex,
                    salary: body.salary,
                    joining_date: body.joining_date,
                    email: body.email,
                    mobile: body.mobile
                }
                const empObj = new Employee(newEmployee);
                return empObj.save();
            }
            else {
                newEmpId = employee[employee.length - 1].empid + 1;
                newEmployee = {
                    empid: newEmpId,
                    fname: body.fname,
                    lname: body.lname,
                    DOB: body.DOB,
                    grade: body.grade,
                    sex: body.sex,
                    salary: body.salary,
                    joining_date: body.joining_date,
                    email: body.email,
                    mobile: body.mobile
                }
                const empObj = new Employee(newEmployee);
                return empObj.save();
            }
        })
        .then(() => {
            return res.status(201).json({
                id: newEmpId,
                messege: 'Empolyee created'
            });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: 'Something went wrong'
            });
        })

}



//updateteEmployee
const updateteEmployee = (req, res) => {
    const empId = req.params.empId;
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            error: 'You must give employee details'
        });
    }


    Employee
        .findOne({ empid: empId })
        .then(employee => {
            employee.fname = body.fname;
            employee.lname = body.lname;
            employee.DOB = body.DOB;
            employee.grade = body.grade;
            employee.sex = body.sex;
            employee.salary = body.salary;
            employee.joinning_date = body.joinning_date;
            employee.email = body.email;
            employee.mobile = body.mobile;

            employee.save()
                .then(() => {
                    return res.status(200).json({
                        messege: "Employee updated successfully"
                    });
                })
                .catch(err => {
                    console.error(err);
                    return res.status(500).json({
                        error: 'Something went wrong'
                    });
                })
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: 'Something went wrong'
            });
        })
}





// deleteEmployee
const deleteEmployee = (req, res) => {
    const empId = req.params.empId;

    Employee.deleteOne({ empid: empId })
        .then(() => {
            return res.status(200).json({
                messege: 'Employee deleted successfully'
            });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: 'Something went wrong'
            });
        })

}



module.exports = {
    getaAllEmployees,
    getEmployee,
    createEmployee,
    updateteEmployee,
    deleteEmployee
};