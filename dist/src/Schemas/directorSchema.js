import Joi from "joi";
export var DirectorSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required()
});
