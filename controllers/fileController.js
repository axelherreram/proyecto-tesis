const File = require('../models/file');
const Task = require('../models/task');
const path = require('path');

// Obtener todos los archivos
exports.getAllFiles = async (req, res) => {
  try {
    const files = await File.findAll();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un archivo por ID
exports.getFileById = async (req, res) => {
  try {
    const file = await File.findByPk(req.params.id);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Subir un nuevo archivo
exports.uploadFile = async (req, res) => {
  try {
    const { taskid } = req.body;
    const filedirectory = req.file.path;

    const task = await Task.findByPk(taskid);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const newFile = await File.create({
      filedirectory,
      taskid,
    });

    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un archivo existente
exports.updateFile = async (req, res) => {
  try {
    const file = await File.findByPk(req.params.id);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }
    await file.update(req.body);
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un archivo
exports.deleteFile = async (req, res) => {
  try {
    const file = await File.findByPk(req.params.id);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }
    await file.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
