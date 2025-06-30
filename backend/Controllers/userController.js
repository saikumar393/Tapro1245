const employee=require('../models/Employee')
const task=require('../models/Taskmodel')

exports.getUserTasks = async (req, res) => {
  const { employeeName } = req.params;
  try {
    const tasks = await Task.find({ employeeName });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status, statusDescription } = req.body;
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.status = status;
    task.statusDescription = statusDescription;
    await task.save();

    res.status(200).json({ message: 'Status updated', task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
