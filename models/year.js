const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const year = sequelize.define("year", {
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
  },{
    tableName: 'year'
  });
  
  
  module.exports = year;
  