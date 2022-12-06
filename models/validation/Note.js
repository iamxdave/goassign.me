const Joi = require('joi');

const noteSchema = Joi.object({
    _id: Joi.number()
        .optional()
        .allow(""),
    title: Joi.string()
        .min(5)
        .max(80)
        .required(),
    creation: Joi.date()
        .required()
        .equal(new Date()),
    implementation: Joi.date()
        .required()
        .greater(new Date()),
    description: Joi.string()
        .min(5)
        .max(400)
        .required(),
});

module.exports = noteSchema;