const { DataTypes } = require("sequelize"); 
const sequelize = require("../config/database");
const TesisAssig = require("./tesisAssig");

const Task = sequelize.define(
  "Task",
  {
    taskid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tesisid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TesisAssig, 
        key: "tesisid",
      },
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE, 
      allowNull: false,
    },    
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
    },
  },
  {
    tableName: "task",
  }
);

// Relación correcta entre las tablas
Task.belongsTo(TesisAssig, { foreignKey: 'tesisid' });
TesisAssig.hasMany(Task, { foreignKey: 'tesisid' });

module.exports = Task;
