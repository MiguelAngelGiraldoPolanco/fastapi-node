const faker = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){}

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const products = await models.Product.findAll({
      include: ['category']
    });
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
      if (!product) {
        throw boom.notFound('User not found');
      }
      return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }

}

module.exports = ProductsService;
