import Joi from "joi";

export const DirectorSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required()
  });