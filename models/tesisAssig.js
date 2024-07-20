const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const tesisAssig = sequelize.define(
  "tesisAssig",
  {
    tesisid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {   
        model: User,
        key: "userid", 
      }, 
    },
    tesisName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    finalGrade: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
  },
  {
    tableName: "tesisAssig", 
  }
);

// Relación con la tabla de usuarios
User.hasMany(tesisAssig, { foreignKey: 'userid' });
tesisAssig.belongsTo(User, { foreignKey: 'userid' });

module.exports = tesisAssig;
