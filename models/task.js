const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const TesisAssig = require("./tesisAssig");

const Task = sequelize.define("Task", {
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
  titleTask: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
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
    type: DataTypes.DECIMAL(4, 2),
    allowNull: true,
  }
}, {
  tableName: "task",
});

module.exports = Task;


