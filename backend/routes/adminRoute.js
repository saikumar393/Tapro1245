const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/AdminController');

// Employee Routes
// router.post('/admin/employee', adminController.addEmployee);
// router.delete('/admin/employee/:id', adminController.deleteEmployee);
// router.get('/admin/employees', adminController.getAllEmployees);

// Task Routes

router.post('/admin/task', adminController.assignTask);
router.delete('/admin/task/:id', adminController.deleteTask);
router.get('/admin/tasks', adminController.getAllTasks);

module.exports = router;

