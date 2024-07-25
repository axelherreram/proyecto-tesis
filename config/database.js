const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proyectotesis', 'root', 'umg123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
