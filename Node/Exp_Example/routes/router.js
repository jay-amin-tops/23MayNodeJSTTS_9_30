var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res) {
    res.render('add', {});
});

router.get('/meow_response', function(req, res) {
    console.log("Called");
    // res.render('meow_response', {});
});

router.post('/add/complete', function(req, res) {
    // var Kitten = req.Kitten;
    console.log("data",req.body); // PROBLEM: it returns empty, while I expect req.body
    // res.redirect('/meow_response');
});

module.exports = router;