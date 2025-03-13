// se conecta una sola vez y hace un await interno para no estar conectandome en cada solicitud que hago, es mas optimo
const { Pool } = require('pg');

  const pool= new Pool({
    host: 'localhost',
    port: 5432,
    user: 'miguel',
    password: 'admin123',
    database: 'my_store'
  });

module.exports= pool;
