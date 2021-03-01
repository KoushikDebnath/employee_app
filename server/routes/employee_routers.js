const express = require('express');
const router = express.Router();
const employeeControllers = require('../controllers/employee_controllers');


router.get('/all',  employeeControllers.getaAllEmployees);
router.get('/get/:empId',  employeeControllers.getEmployee);
router.post('/create',  employeeControllers.createEmployee);
router.put('/update/:empId',  employeeControllers.updateteEmployee);
router.delete('/delete/:empId',  employeeControllers.deleteEmployee);




module.exports = router;