const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { logErrors , errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');


const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com']; // esta es la lista de los dominios que tienen acceso a mi api

// const opctions = { // aqui verificamos que los dominios que se ingresen sean los que estan definidos como permitidos
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin || !origin)){
//       callback(null,true);
//     }else {
//       callback(new Error('acceso no permitido'));
//     }
//   }
// }

// app.use(cors(opctions)); // aqui verifica los permisos a los dominios que le di acceso

app.use(cors()); // esto le da acceso a cualquiera que pida solicitud a la api

app.get('/', (req, res) => {
  res.send('Hola soy macarena y miguel y diana!');
});

app.get('/nombre', (req, res) => {
  res.send('Hola soy macarena !');
});

routerApi(app);
// deben declararse despues de router despues que la app este levantada
// deben ir en orden segun nos interese en este caso el errorhandler no tiene next y mata la app
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`esta corriendo por http://localhost:${port}`);
});


// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json(
//     {
//       categoryId,
//       productId,
//     }
//   );
// });


// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send('No hay limit y offset');
//   }
// });


