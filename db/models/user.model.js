const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    field: 'recovery_token',
    type: DataTypes.STRING,
    allowNull: false,
  },
  recoveryToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  }
}

class User extends Model {
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName : USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
