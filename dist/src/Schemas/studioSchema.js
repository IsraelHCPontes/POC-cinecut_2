import Joi from "joi";
export var StudioSchema = Joi.object({
    name: Joi.string().required()
});
