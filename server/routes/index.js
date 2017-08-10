var express = require('express');
var router = express.Router();
var databaseUtils = require('../../lib/databaseUtils');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    databaseUtils.getSite(83048, function(err, sites){
        
        console.log(sites);
        res.render('index', { title: 'Express' });
    });
});

module.exports = router;
