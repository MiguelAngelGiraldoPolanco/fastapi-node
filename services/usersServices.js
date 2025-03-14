const { faker } = require('@faker-js/faker');


class UsersService{

  constructor(){

  }

  generate(){

  }

  create(data){

  }
   // ejemplo de como conectar y hacer una consulta a la base de datos que tengo en libs postgres.js
  async find(){
    const client = await getConnection();
    try {
      const result = await client.query('SELECT * FROM task');
      return result.rows;  // Retorna los usuarios encontrados.
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    } finally {
      client.end(); // Cierra la conexión después de la consulta.
    }
  }

  findOne(id){

  }

  update(id, changes){

  }

  delete(id){
  }
}

module.exports = UsersService;
