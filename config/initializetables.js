const Role = require('../models/Role');
const Year = require('../models/year');
const TesisAssig = require('../models/tesisAssig');

// Inicializar tables in la BD
const initializetables = async () => {
  try {
    await Year.findOrCreate({ where: { year: "2021" } });
    await Year.findOrCreate({ where: { year: "2022" } });
    await Year.findOrCreate({ where: { year: "2023" } });
    await Year.findOrCreate({ where: { year: "2024" } });
    await Year.findOrCreate({ where: { year: "2025" } });



    await Role.findOrCreate({ where: { role: 'admin' } });
    await Role.findOrCreate({ where: { role: 'user' } });
  } catch (error) {
    console.error('Error initializing roles:', error);
  }
};


module.exports = initializetables;
