const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Task = require("./task");

const User = require("./User");

const notificacion = sequelize.define(
  "notificacion",
  {
    notificationid: {
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
    textNotification: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
  },
  {
    tableName: "notificacion",
  }
);
// Relacion con la tabla de usuarios
notificacion.belongsTo(User, { foreignKey: "userid" });
User.hasMany(notificacion, { foreignKey: "userid" });

// Relacion con la tabla de tareas

notificacion.belongsTo(Task, { foreignKey: "taskid" });
Task.hasMany(notificacion, { foreignKey: "taskid" });

module.exports = notificacion;
