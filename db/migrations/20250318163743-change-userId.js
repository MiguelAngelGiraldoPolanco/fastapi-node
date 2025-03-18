'use strict';
const { DataTypes } = require('sequelize');
const { COSTOMER_TABLE } = require('../models/costomer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(COSTOMER_TABLE, 'user_id',{
      field: 'user_id',
          allowNull: false,
          type: DataTypes.INTEGER,
          unique: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(COSTOMER_TABLE);
  }
};
