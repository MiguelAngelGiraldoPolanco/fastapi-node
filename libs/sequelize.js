const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// const sequelize = new Sequelize(URI, {
//   dialect: 'postgres',
//   logging: true,
// });

const sequelize = new Sequelize('postgres://miguel:admin123@localhost:5432/my_store', {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
