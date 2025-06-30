const Employee = require('../models/Employee');
const Task = require('../models/Taskmodel');


exports.addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee added successfully', employee });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    await Task.deleteMany({ employeeName: employee.employeeName }); // Clean up tasks

    res.status(200).json({ message: 'Employee and their tasks deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
