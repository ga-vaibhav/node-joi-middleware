const express = require('express');
const router = express.Router();
const apiHelper = require('../../helpers/api.helper');

const userSchema = require('../../joi-validators/user.validator');
const joiMiddleware = require('../../middlewares/joi.middleware');

router.post('/user', joiMiddleware(userSchema.user), (req, res, next) => {
    return apiHelper.success(res, [res.body], 'User Details!');
});

module.exports = router;