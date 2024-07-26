const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Year = sequelize.define("Year", {
  yearid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  year: {
    type: DataTypes.STRING(6),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'years'
});

module.exports = Year;
