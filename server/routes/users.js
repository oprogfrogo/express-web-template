const express = require('express');
const router = express.Router();

const Celebrate = require('celebrate');
const config = require('../../config');
const db = config.db;
const Joi = require('joi');

router.all('/', Celebrate({
    body: Joi.object().keys({
        first_name: Joi.string(),
        email: Joi.string()
    })
}), (req, res) => {

    const collection = db.get().collection('express_web_template_users');

    collection.find(req.body).toArray(function(err, users) {

        res.render('users', {
            users
        });
    })
});

module.exports = router;