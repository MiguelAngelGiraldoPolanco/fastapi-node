const express = require('express');
const UsersService = require('./../services/usersServices');
const { createUserSchema ,updateUserSchema, getUserSchema } = require('./../schemas/userSchema');
const validatorHandler = require('./../middlewares/validatorHandler');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res) => {
  try {
    const users = service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getUserSchema, "params"),
  async (req, res) => {
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
  async (req, res)=>{
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
  async (req, res)=>{
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
