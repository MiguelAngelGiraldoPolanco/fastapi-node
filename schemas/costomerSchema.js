const Joi = require('joi');

const id = Joi.number().integer();
const lastName = Joi.string();
const name = Joi.string().min(3).max(30);
const phone = Joi.string();

const createCostomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
});

const updateCostomerSchema = Joi.object({
  name,
  lastName,
  phone,
});

const getCostomerSchema = Joi.object({
  id: id.required()
});

module.exports = { createCostomerSchema, updateCostomerSchema, getCostomerSchema };
