const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proyectotesis', 'root', 'umg123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
