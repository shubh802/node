var express = require('express');
var router = express.Router();
var vd = require("../test.json");

/* GET home page. */
router.get('/', function(req, res, next) {


    res.render('index', { title: 'Shubham'
        ,testdata : vd
    });

});

module.exports = router;

