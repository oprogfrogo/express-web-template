const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        messsage: 'Express Web Template'
    });
});

module.exports = router;