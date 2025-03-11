const Joi = require('joi');

const id = Joi.string().uuid();
const name= Joi.string().min(3).max(15);
const sex = Joi.string().valid("male","famale");
const cargo= Joi.string().min(3).max(15);

const createUserSchema = Joi.object({
  name: name.required(),
  sex: sex.required(),
  cargo: cargo.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  sex: sex,
  cargo: cargo
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema ,updateUserSchema, getUserSchema };
