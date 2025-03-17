const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const COSTOMER_TABLE = 'costomers';

const CostomerSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name',
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}

class Costomer extends Model {
  static associate(models) {
    this.belongsTo(models.User, {as: 'user'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName : COSTOMER_TABLE,
      modelName: 'Costomer',
      timestamps: false
    }
  }
}

module.exports = { COSTOMER_TABLE, CostomerSchema, Costomer }
