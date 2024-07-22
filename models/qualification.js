const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Task = require("./task");

const User = require("./User");

const qualification = sequelize.define(
  "qualification",
  {
    qualificationid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    taskid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Task,
        key: "taskid",
      },
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: "userid",
        },
      },
    grade: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    dateQualification: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "qualification",
  }
);
// Relacion con la tabla de usuarios
qualification.belongsTo(User, { foreignKey: "userid" });
User.hasMany(qualification, { foreignKey: "userid" });

// Relacion con la tabla de tareas

qualification.belongsTo(Task, { foreignKey: "taskid" });
Task.hasMany(qualification, { foreignKey: "taskid" });

module.exports = File;
