import Joi from "joi";

export const MovieSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    directorId: Joi.number().required(),
    studioId: Joi.number().required(),
    genre: Joi.string().required(),
    score: Joi.number().required()
  });