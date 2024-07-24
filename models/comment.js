const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Task = require("./task");

const User = require("./User");

const comment = sequelize.define(
  "comment",
  {
    commentid: {
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
    tableName: "comment",
  }
);
// Relacion con la tabla de usuarios
comment.belongsTo(User, { foreignKey: "userid" });
User.hasMany(comment, { foreignKey: "userid" });

// Relacion con la tabla de tareas

comment.belongsTo(Task, { foreignKey: "taskid" });
Task.hasMany(comment, { foreignKey: "taskid" });

module.exports = comment;
