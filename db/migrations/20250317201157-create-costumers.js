'use strict';

const { CostomerSchema, COSTOMER_TABLE } = require('../models/costomer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(COSTOMER_TABLE, CostomerSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(COSTOMER_TABLE);
  }
};
