const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./Role');
const Year = require('./year');


const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'roleId'
    }
  },
  yearid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Year,
      key: 'yearid'
    }
  }
}, {
  tableName: 'users'
});

Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

Year.hasMany(User, { foreignKey: 'yearid' });
User.belongsTo(Role, { foreignKey: 'yearid' });


module.exports = User;
