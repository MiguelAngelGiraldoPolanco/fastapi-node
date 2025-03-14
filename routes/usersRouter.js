const express = require('express');
const UsersService = require('./../services/usersServices');
const { createUserSchema ,updateUserSchema, getUserSchema } = require('./../schemas/userSchema');
const validatorHandler = require('./../middlewares/validatorHandler');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();  // Usa await para resolver la promesa
    res.json(users);  // Ahora 'users' tiene los datos de la consulta
  } catch (error) {
    next(error);  // Pasar el error al manejador de errores de Express
  }
});

router.get('/:id',
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createUserSchema, "body"),
  async (req, res, next)=>{
    try {
      const body = req.body;
      const newUser = service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res , next)=>{
  try {
    const { id } = req.params;
    const body = req.body;
    const user = service.update(id, body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res)=>{
  try {
    const { id } = req.params;
    const rta = service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
