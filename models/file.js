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
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    taskid: {
      type: DataTypes.INTEGER, 
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

File.belongsTo(Task, { foreignKey: 'taskid' });
Task.hasMany(File, { foreignKey: 'taskid' });

module.exports = File;
