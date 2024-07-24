const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./Role');
const Year = require('./year');


const User = sequelize.define('User', {
  userid: {
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
  roleid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'roleid'
    }
  },
  yearid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Year,
      key: 'yearid'
    }
  },
  profilePicture: {
    type: DataTypes.STRING(200),
    allowNull: true
  },

}, {
  tableName: 'users'
});

// Relacion con la tabla de roles
Role.hasMany(User, { foreignKey: 'roleid' });
User.belongsTo(Role, { foreignKey: 'roleid' });

// relacion con la tabla de años
Year.hasMany(User, { foreignKey: 'yearid' });
User.belongsTo(Role, { foreignKey: 'yearid' });


module.exports = User;
