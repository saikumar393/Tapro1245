const express = require('express');
const router = express.Router();
const employeeController = require('../Controllers/EmployeeController');

router.post('/employee', employeeController.addEmployee);
router.get('/employees', employeeController.getAllEmployees);
router.get('/employee/:id', employeeController.getEmployeeById);
router.delete('/employee/:id', employeeController.deleteEmployee);

module.exports = router;
