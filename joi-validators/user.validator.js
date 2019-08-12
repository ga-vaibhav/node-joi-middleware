const Joi = require('joi')
const schemas = {
    user: Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        grade: Joi.number().min(1).max(5)
    })
};
module.exports = schemas;
