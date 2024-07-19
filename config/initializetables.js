const Role = require('../models/Role');
const Year = require('../models/year');

// Inicializar tables in la BD
const initializetables = async () => {
  try {
    await Year.findOrCreate({ where: { year: "2021" } });
    await Year.findOrCreate({ where: { year: "2022" } });
    await Year.findOrCreate({ where: { year: "2023" } });
    await Year.findOrCreate({ where: { year: "2024" } });

    await Role.findOrCreate({ where: { role: 'admin' } });
    await Role.findOrCreate({ where: { role: 'user' } });
    console.log('tablas inicializadas');
  } catch (error) {
    console.error('Error initializing roles:', error);
  }
};


module.exports = initializetables;
