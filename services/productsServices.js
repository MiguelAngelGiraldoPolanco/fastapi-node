const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class ProductsService{
  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url(),
        block: faker.datatype.boolean()
      });
    }
  }

  create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ... data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    try {
      const query = "SELECT * FROM task";
      const [data] = await sequelize.query(query);
      return data;  // Retorna los usuarios encontrados.
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  }

  findOne(id){
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('Product not found');
    }

    if (product.block){
      throw boom.conflict('Product is block');
    }
    return product;
  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ... product,
      ... changes
    };
    return this.products[index];
  }

  delete(id){
    const index =  this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
