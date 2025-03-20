const express = require('express');
const CategoriesService = require('./../services/categoriesServices');
const { createCategorySchema ,updateCategorySchema, getCategorySchema }= require('./../schemas/categorySchema');
const validatorHandler = require('./../middlewares/validatorHandler');


const router = express.Router();
const service = new CategoriesService();

router.get('/',  async (req, res) => {
  try {
    const categories =  await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res) => {
    try {
      const { id } =  req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }

});

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res)=>{
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }

});
// este es el ejemplo de como se usa asyn await esto deben tenerlo todos y las clases tambien
router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res)=>{
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      res.status(404).json({
        message : error.message
      });
    }
});

router.delete('/:id',async (req, res)=>{
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
