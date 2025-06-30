const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  
  },
  phoneno: {
    type: String,
    required: true,
  
  },
  password: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  tasks: [{
    type: String
  }]
}, {
  timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
