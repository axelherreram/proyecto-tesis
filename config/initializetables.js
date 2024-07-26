const Role = require("../models/role");
const Year = require("../models/year");
const Task = require("../models/task");
const File = require("../models/file");
const comment = require("../models/comment");

// Inicializar tables in la BD
const initializetables = async () => {
  try {
    await Year.findOrCreate({ where: { year: "2024" } });
    await Year.findOrCreate({ where: { year: "2025" } });

    await Role.findOrCreate({ where: { role: "admin" } });
    await Role.findOrCreate({ where: { role: "user" } });

    console.log(`Tablas inicializadas correctamente en la BD`);
  } catch (error) {
    console.error("Error initializing roles:", error);
  }
};

module.exports = initializetables;
