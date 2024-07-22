const Task = require('../models/task');

// Obtener todas las tareas
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una tarea por ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una tarea existente
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.update(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
