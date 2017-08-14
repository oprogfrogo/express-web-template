const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('index');
});

router.get('/blank', (req, res) => {

    res.render('blank');
});

router.get('/buttons', (req, res) => {

    res.render('buttons');
});

router.get('/flot', (req, res) => {

    res.render('flot');
});

router.get('/forms', (req, res) => {

    res.render('forms');
});

router.get('/grid', (req, res) => {

    res.render('grid');
});

router.get('/icons', (req, res) => {

    res.render('icons');
});

router.get('/login', (req, res) => {

    res.render('login');
});

router.get('/morris', (req, res) => {

    res.render('morris');
});

router.get('/notifications', (req, res) => {

    res.render('notifications');
});

router.get('/panels-wells', (req, res) => {

    res.render('panels-wells');
});

router.get('/tables', (req, res) => {

    res.render('tables');
});

router.get('/typography', (req, res) => {

    res.render('typography');
});

module.exports = router;