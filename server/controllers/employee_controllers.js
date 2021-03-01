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
    
    let newEmployee = {};

    
    newEmployee = {
        fname: body.fname,
        lname: body.lname,
        DOB: body.DOB,
        grade: body.grade,
        gender: body.gender,
        salary: body.salary,
        joining_date: body.joining_date,
        email: body.email,
        mobile: body.mobile
    }
    const empObj = new Employee(newEmployee);
    empObj.save()    
        .then((employee) => {
            return res.status(201).json({
                id: employee._id,
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
        .findOne({ _id: empId })
        .then(employee => {
            if(employee!=null){
            employee.fname = body.fname;
            employee.lname = body.lname;
            employee.DOB = body.DOB;
            employee.grade = body.grade;
            employee.gender = body.gender;
            employee.salary = body.salary;
            employee.joinning_date = body.joinning_date;
            employee.email = body.email;
            employee.mobile = body.mobile;

            return employee.save()
            }
            else{
                return Promise.reject('NoEmployee');
            }   
        })
        .then(() => {
            return res.status(200).json({
                messege: "Employee updated successfully"
            });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: err === 'NoEmployee'?'No employee found':'Something went wrong'
            });
        })
}





// deleteEmployee
const deleteEmployee = (req, res) => {
    const empId = req.params.empId;

    Employee.deleteOne({ _id: empId })
        .then(({deletedCount}) => {
            if(deletedCount!==0){
            return res.status(200).json({
                messege: 'Employee deleted successfully'
            });}
            else return Promise.reject('noneDeleted');
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: err ==='noneDeleted'?'No employee found':'Something went wrong'
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