const { faker } = require('@faker-js/faker');

const { models }= require('../libs/sequelize')

class CostomersService{

  constructor(){}

  async create(data){
      const newCostomer = await models.Costomer.create(data);
      return newCostomer;
  }
   // ejemplo de como conectar y hacer una consulta a la base de datos que tengo en libs postgres.js
  async find(){
      const rta = await models.Costomer.findAll();
      return rta;  // Retorna los usuarios encontrados.
  }

  async findOne(id){
      const costomer = await models.Costomer.findByPk(id);
      if (!costomer) {
        throw boom.notFound('User not found');
      }
      return costomer;
  }

  async update(id, changes){
      const costomer = await this.findOne(id);
      const rta = costomer.update(changes);
      return rta;
  }

  async delete(id){
      const costomer = await this.findOne(id);
      await costomer.destroy();
      return { id };
  }
}

module.exports = CostomersService;
