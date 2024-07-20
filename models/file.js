const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Task = require("./task");

const File = sequelize.define(
  "File",
  {
    fileid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fileDirectory: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    taskid: {
      type: DataTypes.INTEGER, // Cambiado a INTEGER para coincidir con Task
      allowNull: false,
      references: {
        model: Task,
        key: "taskid",
      },
    },
  },
  {
    tableName: "files",
  }
);

// Relacion con la tabla de tareas
File.belongsTo(File, { foreignKey: 'taskid' });
Task.hasMany(File, { foreignKey: 'taskid' });

module.exports = File;
