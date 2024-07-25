const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const TesisAssig = require("./TesisAssig");

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
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "task",
});

TesisAssig.hasMany(Task, { foreignKey: 'tesisid' });
Task.belongsTo(TesisAssig, { foreignKey: 'tesisid' });

module.exports = Task;
