import joi from "joi";

export const costumerSchema = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  cpf: joi.number().required(),
});

export const medicSchema = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  crm: joi.number().required(),
  speciality: joi.string().required(),
});
