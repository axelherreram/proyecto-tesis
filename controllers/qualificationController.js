const Qualification = require('../models/qualification');
const Task = require('../models/task');
const User = require('../models/users');

// Obtener todas las calificaciones
exports.getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.findAll();
    res.status(200).json(qualifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una calificación por ID
exports.getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findByPk(req.params.id);
    if (!qualification) {
      return res.status(404).json({ error: 'Qualification not found' });
    }
    res.status(200).json(qualification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva calificación
exports.createQualification = async (req, res) => {
  try {
    const { taskid, userid, grade, comments, date } = req.body;

    // Verificar si la tarea y el usuario existen
    const task = await Task.findByPk(taskid);
    const user = await User.findByPk(userid);
    if (!task || !user) {
      return res.status(404).json({ error: 'Task or User not found' });
    }

    const newQualification = await Qualification.create({
      taskid,
      userid,
      grade,
      comments,
      date,
    });

    res.status(201).json(newQualification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una calificación existente
exports.updateQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByPk(req.params.id);
    if (!qualification) {
      return res.status(404).json({ error: 'Qualification not found' });
    }
    await qualification.update(req.body);
    res.status(200).json(qualification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una calificación
exports.deleteQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByPk(req.params.id);
    if (!qualification) {
      return res.status(404).json({ error: 'Qualification not found' });
    }
    await qualification.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
