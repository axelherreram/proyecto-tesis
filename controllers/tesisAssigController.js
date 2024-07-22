const TesisAssig = require('../models/tesisAssig');

// Obtener todas las asignaciones de tesis
exports.getAllTesisAssigs = async (req, res) => {
  try {
    const tesisAssigs = await TesisAssig.findAll();
    res.status(200).json(tesisAssigs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una asignación de tesis por ID
exports.getTesisAssigById = async (req, res) => {
  try {
    const tesisAssig = await TesisAssig.findByPk(req.params.id);
    if (!tesisAssig) {
      return res.status(404).json({ error: 'TesisAssig not found' });
    }
    res.status(200).json(tesisAssig);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva asignación de tesis
exports.createTesisAssig = async (req, res) => {
  try {
    const newTesisAssig = await TesisAssig.create(req.body);
    res.status(201).json(newTesisAssig);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una asignación de tesis existente
exports.updateTesisAssig = async (req, res) => {
  try {
    const tesisAssig = await TesisAssig.findByPk(req.params.id);
    if (!tesisAssig) {
      return res.status(404).json({ error: 'TesisAssig not found' });
    }
    await tesisAssig.update(req.body);
    res.status(200).json(tesisAssig);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una asignación de tesis
exports.deleteTesisAssig = async (req, res) => {
  try {
    const tesisAssig = await TesisAssig.findByPk(req.params.id);
    if (!tesisAssig) {
      return res.status(404).json({ error: 'TesisAssig not found' });
    }
    await tesisAssig.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
