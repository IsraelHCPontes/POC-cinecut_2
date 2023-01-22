import Joi from "joi";
export var MovieSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    director: Joi.string().required(),
    score: Joi.number().required()
});
