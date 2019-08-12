const Joi = require('joi');
const apiHelper = require('../helpers/api.helper');

const joiMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = Joi.validate(req.body, schema);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            return apiHelper.failure(res, [], message);
        }
    }
}
module.exports = joiMiddleware;