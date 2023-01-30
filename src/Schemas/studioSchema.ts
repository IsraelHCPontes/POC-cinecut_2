import Joi from "joi";

export const StudioSchema = Joi.object({
    name: Joi.string().required()
  });