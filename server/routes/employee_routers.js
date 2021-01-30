const express = require('express');
const router = express.Router();
const employeeControllers = require('../controllers/employee_controllers');
const auth = require('../Auth');


router.get('/all', auth, employeeControllers.getaAllEmployees);
router.get('/:empId', auth, employeeControllers.getEmployee);
router.post('/create', auth, employeeControllers.createEmployee);
router.put('/:empId', auth, employeeControllers.updateteEmployee);
router.delete('/:empId', auth, employeeControllers.deleteEmployee);




module.exports = router;