const express = require('express');
const CostomersService = require('../services/costomersServices');
const { createCostomerSchema ,updateCostomerSchema, getCostomerSchema } = require('./../schemas/costomerSchema');
const validatorHandler = require('../middlewares/validatorHandler');

const router = express.Router();
const service = new CostomersService();

router.get('/', async (req, res, next) => {
  try {
    const costomers = await service.find();  // Usa await para resolver la promesa
    res.json(costomers);  // Ahora 'users' tiene los datos de la consulta
  } catch (error) {
    next(error);  // Pasar el error al manejador de errores de Express
  }
});

router.get('/:id',
  validatorHandler(getCostomerSchema, "params"),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const costomer = service.findOne(id);
    res.json(costomer);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createCostomerSchema, "body"),
  async (req, res, next)=>{
    try {
      const body = req.body;
      const newCostomer = await service.create(body);
      res.status(201).json(newCostomer);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getCostomerSchema, 'params'),
  validatorHandler(updateCostomerSchema, 'body'),
  async (req, res , next)=>{
  try {
    const { id } = req.params;
    const body = req.body;
    const costomer = await service.update(id, body);
    res.json(costomer);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res)=>{
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
