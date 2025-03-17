const { User, UserSchema } = require('./user.model')
const { Costomer, CostomerSchema } = require('./costomer.model')

function setupModels (sequelize){
  User.init(UserSchema, User.config(sequelize));
  Costomer.init(CostomerSchema, Costomer.config(sequelize));

  Costomer.associate(sequelize.models);
}

module.exports = setupModels;
