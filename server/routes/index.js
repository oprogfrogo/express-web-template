var express = require('express');
var router = express.Router();

const Celebrate = require('celebrate');
const db = require('../../config/db');
const Joi = require('joi');

router.get('/', (req, res) => {
    
    res.render('index', {
        title: 'Express Web Template'
    });
});

router.post('/users', Celebrate({
  body: Joi.object().keys({
    first_name: Joi.string(),
    email: Joi.string()
  })
}), (req, res) => {
    
    var collection = db.get().collection('express_web_template_users');
        
    collection.find(req.body).toArray(function(err, users) {

        res.send({
            users
        });
    })
    
});

module.exports = router;
